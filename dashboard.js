// script.js
const translations = {
    en: {
        dashboardNav: "Dashboard", spectrumNav: "Spectrum Analysis", systemOnline: "System Online", cameraActive: "Hyperspectral Camera: Active", mainTitle: "Smart Fruit Quality Inspection System", subTitle: "AI-powered hyperspectral bruise detection for industrial fruit grading", currentBatch: "Current Batch:", metricTotal: "Total Processed", trendVsTdy: "4.5% vs yesterday", metricRejected: "Rejected Rate", trendImproved: "-1.2% (improved)", metricAccuracy: "Accuracy", trendLab: "Based on Lab Validation", metricSavings: "Est. Monthly Savings", trendRep: "Replaced 3 manual sorters", liveAnalysisTitle: "Live Single Fruit Analysis", scannerActive: "Scanner Active", lgHealthy: "Healthy", lgBruise: "Bruise/Damage", lgBg: "Background", ixTitle: "HYPERSPECTRAL<br>ANALYSIS", ixSub: "TISSUE HEALTH INDEX", ixDamaged: "DAMAGED", ixHealthy: "HEALTHY", st1Title: "Hyperspectral Cube", st1Status: "Acquired", st2Title: "Segmentation", st2Status: "Masked", st3Title: "Defect Detection", st3Status: "Analyzing...", lblBrix: "Brix (Sweetness)", lblRipe: "Ripeness Stage", lblPest: "Pesticide Residue", lblFungi: "Fungal Exudate", lblDamage: "Damage Proportion", qualitySummary: "Quality Classification Summary", chartAccepted: "Accepted", chartRejected: "Rejected", recentLogs: "Recent Conveyor Logs", exportCsv: "Export CSV", colTime: "Timestamp", colId: "Sample ID", colBrix: "Brix Est.", colRipe: "Ripeness", colPest: "Pesticide", colFungi: "Fungi Detect", colDmg: "Damage %", colStatus: "Status",
        jsSafe: "Safe (<0.01ppm)", jsNegative: "Negative", jsPositive: "Positive", jsAccepted: "ACCEPTED", jsRejected: "REJECTED", jsAccBadge: "ACCEPTED", jsRejBadge: "REJECTED",
        jsReasonSurface: "Surface intact. Meet Class A export standard.",
        jsReasonPest: "Pesticide residue exceeding MRL limits. Reject.",
        jsReasonFungi: "Fungal infection detected in subsurface. Do not pack.",
        jsReasonSevere: "Severe internal bruising detected. Exceeds threshold.",
        jsReasonMinor: "Minor bruise > 15%. Downgrade to Class C or Reject.",
        jsStage2: "Stage 2 (Firm)", jsStage3: "Stage 3 (Half-ripe)", jsStage4: "Stage 4 (Ripe)", jsStage5: "Stage 5 (Over-ripe)"
    },
    vi: {
        dashboardNav: "Bảng điều khiển", spectrumNav: "Phân tích Phổ", systemOnline: "Hệ thống Bật", cameraActive: "Camera Siêu Quang Phổ: Bật", mainTitle: "Hệ Thống Phân Loại Chất Lượng Trái Cây", subTitle: "Phát hiện dập nát bằng phân tích quang phổ AI cho công nghiệp", currentBatch: "Lô hiện tại:", metricTotal: "Tổng số phân tích", trendVsTdy: "Tăng 4.5% so với hôm qua", metricRejected: "Tỉ lệ Lỗi", trendImproved: "Giảm 1.2% (cải thiện)", metricAccuracy: "Độ chính xác", trendLab: "Nghiệm thu bởi Lab", metricSavings: "Tiết kiệm ước tính", trendRep: "Thay thế 3 nhân công", liveAnalysisTitle: "Phân Tích Trái Cây Trực Tiếp", scannerActive: "Máy quét đang chạy", lgHealthy: "Khỏe mạnh", lgBruise: "Dập / Hư hỏng", lgBg: "Nền", ixTitle: "PHÂN TÍCH<br>QUANG PHỔ", ixSub: "CHỈ SỐ SỨC KHỎE MÔ TRÁI", ixDamaged: "HƯ HỎNG", ixHealthy: "TỐT", st1Title: "Khối Phổ 3D", st1Status: "Đã thu nhận", st2Title: "Tách nền Mask", st2Status: "Đã tách quả", st3Title: "Phát hiện Lỗi", st3Status: "Đang phân tích...", lblBrix: "Độ Brix (Ngọt)", lblRipe: "Độ Chín", lblPest: "Chất Bảo Quản", lblFungi: "Tụ Nấm", lblDamage: "Tỉ lệ móp dập", qualitySummary: "Tóm tắt Phân Loại", chartAccepted: "Đạt chuẩn", chartRejected: "Loại bỏ", recentLogs: "Nhật ký Băng chuyền", exportCsv: "Lưu file CSV", colTime: "Thời gian", colId: "Mã mẫu", colBrix: "Độ Brix", colRipe: "Độ Chín", colPest: "Hoá chất", colFungi: "Nấm", colDmg: "Tỉ lệ dập", colStatus: "Trạng thái",
        jsSafe: "An toàn (<0.01ppm)", jsNegative: "Không có", jsPositive: "Cảnh báo", jsAccepted: "ĐẠT QUY CHUẨN", jsRejected: "BỊ LOẠI", jsAccBadge: "ĐẠT", jsRejBadge: "LOẠI",
        jsReasonSurface: "Bề mặt nguyên vẹn. Đạt tiêu chuẩn xuất khẩu Loại A.",
        jsReasonPest: "Tồn dư thuốc BVTV vượt ngưỡng an toàn. Hủy bỏ.",
        jsReasonFungi: "Phát hiện ổ nấm phát triển dưới biểu bì. Loại bỏ.",
        jsReasonSevere: "Phát hiện vết dập máu mủ nội mô sâu nghiêm trọng. Loại bỏ.",
        jsReasonMinor: "Vết dập nhẹ > 15%. Hạ cấp xuống tiêu chuẩn Hàng chợ C.",
        jsStage2: "Bậc 2 (Cứng)", jsStage3: "Bậc 3 (Bán chín)", jsStage4: "Bậc 4 (Chín chuẩn)", jsStage5: "Bậc 5 (Chín quá)"
    }
};
let currentLang = 'en';

document.addEventListener("DOMContentLoaded", () => {

    // 1. Initialize Quality Classification Chart (Doughnut)
    const ctx = document.getElementById('qualityChart').getContext('2d');
    
    // Initial data
    let acceptedCount = 11429; 
    let rejectedCount = 1021;  
    let totalProcessed = 12450;

    const qualityChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Accepted', 'Rejected'],
            datasets: [{
                data: [acceptedCount, rejectedCount],
                backgroundColor: ['#22c55e', '#ef4444'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '75%',
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) label += ': ';
                            if (context.parsed !== null) {
                                const total = context.chart._metasets[0].total;
                                const percentage = ((context.parsed / total) * 100).toFixed(1) + '%';
                                label += percentage + ` (${context.parsed} units)`;
                            }
                            return label;
                        }
                    }
                }
            },
            animation: { animateScale: true, animateRotate: true }
        }
    });

    // 2. DOM Elements for Live Updates
    const totalEl = document.getElementById('totalProcessed');
    const rejectRateEl = document.getElementById('rejectRate');
    const tableBody = document.getElementById('logTableBody');
    
    // Single Fruit Live Element
    const currentDamageEl = document.getElementById('currentDamage');
    const currentStatusEl = document.getElementById('currentStatus');
    const progressFillEl = document.querySelector('.progress-fill');
    const reasonTextEl = document.querySelector('.reason');
    const scanImageEl = document.querySelector('.feed-img');
    const scanLineEl = document.querySelector('.scanner-line');
    
    // New Parameters
    const currentBrixEl = document.getElementById('currentBrix');
    const currentRipenessEl = document.getElementById('currentRipeness');
    const currentPesticideEl = document.getElementById('currentPesticide');
    const currentFungiEl = document.getElementById('currentFungi');
    
    // Example IDs
    let sampleCounter = 893;

    // Helper: format numbers with commas
    const formatNumber = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Helper: Create Table Row
    function addTableRow(data) {
        const tr = document.createElement('tr');
        tr.classList.add('new-row');
        
        const statusBadge = data.status === 'Accepted' 
            ? `<span class="tag-accepted"><i class="fa-solid fa-check"></i> ${translations[currentLang].jsAccBadge}</span>`
            : `<span class="tag-rejected"><i class="fa-solid fa-xmark"></i> ${translations[currentLang].jsRejBadge}</span>`;

        tr.innerHTML = `
            <td>${data.timestamp}</td>
            <td><strong>#${data.id}</strong></td>
            <td>${data.brix}%</td>
            <td>${data.ripeness}</td>
            <td>${data.pesticide}</td>
            <td>${data.fungi}</td>
            <td style="${data.damage > 15 ? 'color: var(--status-rejected);' : ''}">${data.damage.toFixed(2)}%</td>
            <td>${statusBadge}</td>
        `;

        tableBody.insertBefore(tr, tableBody.firstChild);
        
        // Keep only top 8 rows
        if(tableBody.children.length > 8) {
            tableBody.removeChild(tableBody.lastChild);
        }
    }

    // Seed initial table data
    const seedData = [
        {id: "SAMPLE-0892", brix: 12.1, ripeness: "Stage 4", pesticide: "Safe (<0.01ppm)", fungi: "Negative", damage: 61.00, status: "Rejected"},
        {id: "SAMPLE-0891", brix: 14.2, ripeness: "Stage 4", pesticide: "0.02 ppm", fungi: "Negative", damage: 2.10, status: "Accepted"},
        {id: "SAMPLE-0890", brix: 13.9, ripeness: "Stage 3", pesticide: "Safe (<0.01ppm)", fungi: "Negative", damage: 4.50, status: "Accepted"},
        {id: "SAMPLE-0889", brix: 14.5, ripeness: "Stage 5", pesticide: "None", fungi: "Negative", damage: 1.20, status: "Accepted"},
        {id: "SAMPLE-0888", brix: 11.2, ripeness: "Stage 2", pesticide: "0.05 ppm", fungi: "Positive", damage: 22.40, status: "Rejected"},
    ];

    seedData.forEach((row, idx) => {
        let d = new Date();
        d.setSeconds(d.getSeconds() - (idx * 4));
        row.timestamp = d.toLocaleTimeString('en-US', {hour12: false}) + '.' + Math.floor(Math.random()*99);
        addTableRow(row);
    });

    // 3. Live Simulation Loop
    setInterval(() => {
        scanLineEl.style.animationPlayState = 'paused';
        scanImageEl.style.opacity = 0.5;
        
        setTimeout(() => {
            scanLineEl.style.animationPlayState = 'running';
            scanImageEl.style.opacity = 1;
            
            const isDefective = Math.random() < 0.1; 
            
            let damage = 0;
            let status = '';
            let brix = (11 + Math.random() * 4).toFixed(1);
            let fungi = translations[currentLang].jsNegative;
            let ripenessStages = [translations[currentLang].jsStage2, translations[currentLang].jsStage3, translations[currentLang].jsStage4, translations[currentLang].jsStage5];
            let ripeness = ripenessStages[Math.floor(Math.random() * ripenessStages.length)];
            let pesticide = (Math.random() * 0.03).toFixed(2) + " ppm";
            if(pesticide === "0.00 ppm" || pesticide === "0.01 ppm") pesticide = translations[currentLang].jsSafe;
            
            let reasonText = `<i class="fa-solid fa-check-circle" style="color:var(--status-accepted)"></i> ${translations[currentLang].jsReasonSurface}`;

            if (isDefective) {
                damage = 15 + Math.random() * 50; 
                status = 'Rejected';
                rejectedCount++;
                
                let defectType = Math.random();
                if(defectType < 0.2) {
                    pesticide = (0.05 + Math.random() * 0.05).toFixed(2) + " ppm";
                    reasonText = `<i class="fa-solid fa-skull-crossbones" style="color:var(--status-rejected)"></i> ${translations[currentLang].jsReasonPest}`;
                    damage = Math.random() * 5; 
                } else if(defectType < 0.45) {
                    fungi = translations[currentLang].jsPositive;
                    reasonText = `<i class="fa-solid fa-virus" style="color:var(--status-rejected)"></i> ${translations[currentLang].jsReasonFungi}`;
                } else if(damage > 40) {
                    reasonText = `<i class="fa-solid fa-triangle-exclamation" style="color:var(--status-rejected)"></i> ${translations[currentLang].jsReasonSevere}`;
                } else {
                    reasonText = `<i class="fa-solid fa-triangle-exclamation" style="color:var(--status-warning)"></i> ${translations[currentLang].jsReasonMinor}`;
                }

                currentStatusEl.innerHTML = `<h2 class="status-rejected">${translations[currentLang].jsRejected}</h2>`;
                progressFillEl.style.background = 'var(--status-rejected)';
                
                // Static image, varying filter for defects
                scanImageEl.src = "assets/heatmap.png";
                scanImageEl.style.filter = 'contrast(1.4) hue-rotate(-20deg) saturate(1.5)';

            } else {
                damage = Math.random() * 8; 
                status = 'Accepted';
                acceptedCount++;
                
                currentStatusEl.innerHTML = `<h2 class="status-accepted">${translations[currentLang].jsAccepted}</h2>`;
                progressFillEl.style.background = 'var(--status-accepted)';
                
                // Static image, healthy filter
                scanImageEl.src = "assets/heatmap.png";
                scanImageEl.style.filter = 'contrast(1.2)';
            }

            currentBrixEl.innerText = brix + '%';
            currentRipenessEl.innerText = ripeness;
            currentPesticideEl.innerText = pesticide;
            
            if(fungi === translations[currentLang].jsPositive) {
                currentFungiEl.innerHTML = `<span style="color: var(--status-rejected); font-weight: bold;">${fungi}</span>`;
            } else {
                currentFungiEl.innerText = fungi;
            }
            if(pesticide.includes('ppm') && parseFloat(pesticide) > 0.04) {
                currentPesticideEl.innerHTML = `<span style="color: var(--status-rejected); font-weight: bold;">${pesticide}</span>`;
            }

            currentDamageEl.innerText = damage.toFixed(2) + '%';
            progressFillEl.style.width = Math.min(damage, 100) + '%';
            reasonTextEl.innerHTML = reasonText;
            
            const now = new Date();
            const timestamp = now.toLocaleTimeString('en-US', {hour12: false}) + '.' + Math.floor(now.getMilliseconds()/10);
            
            // Added TIMESTAMP display
            document.querySelector('.current-result h4').innerHTML = `Current Sample ID: #SAMPLE-0${sampleCounter} &nbsp; <span style="color: var(--status-accepted); font-weight: bold; border-left: 2px solid #334155; padding-left: 10px; opacity: 0.8;"><i class="fa-regular fa-clock"></i> ${timestamp}</span>`;

            // Update Total Metrics
            totalProcessed++;
            totalEl.innerText = formatNumber(totalProcessed);
            rejectRateEl.innerText = (rejectedCount / totalProcessed * 100).toFixed(1) + '%';

            qualityChart.data.datasets[0].data = [acceptedCount, rejectedCount];
            qualityChart.update();
            
            document.querySelector('.dot.accepted').parentElement.innerHTML = `<span class="dot accepted"></span> ${translations[currentLang].chartAccepted} (${(acceptedCount / totalProcessed * 100).toFixed(1)}%)`;
            document.querySelector('.dot.rejected').parentElement.innerHTML = `<span class="dot rejected"></span> ${translations[currentLang].chartRejected} (${(rejectedCount / totalProcessed * 100).toFixed(1)}%)`;
            
            addTableRow({
                id: `SAMPLE-0${sampleCounter}`,
                brix: brix,
                ripeness: ripeness,
                pesticide: pesticide,
                fungi: fungi,
                damage: damage,
                timestamp: timestamp,
                status: status
            });

            sampleCounter++;

        }, 500);

    }, 3500);

    // ROI Tab Implementation logic
    const roiTab = document.getElementById('nav-roi');
    const dashboardTab = document.getElementById('nav-dashboard');
    const spectrumTab = document.getElementById('nav-spectrum');
    
    const dashboardView = document.getElementById('dashboard-tab');
    const roiView = document.getElementById('roi-tab');
    const spectrumView = document.getElementById('spectrum-tab');
    
    const metricsRow = document.querySelector('.metrics-grid');

    function switchTab(showView, hideViews, activeTabNode, inactiveTabNodes) {
        hideViews.forEach(v => v.style.display = 'none');
        showView.style.display = 'grid'; 
        
        inactiveTabNodes.forEach(t => t.classList.remove('active'));
        activeTabNode.classList.add('active');
        
        if(showView.id === 'dashboard-tab') {
            metricsRow.style.display = 'grid';
        } else {
            metricsRow.style.display = 'none';
        }
    }

    dashboardTab.addEventListener('click', () => switchTab(dashboardView, [roiView, spectrumView], dashboardTab, [roiTab, spectrumTab]));
    roiTab.addEventListener('click', () => switchTab(roiView, [dashboardView, spectrumView], roiTab, [dashboardTab, spectrumTab]));
    spectrumTab.addEventListener('click', () => {
        switchTab(spectrumView, [dashboardView, roiView], spectrumTab, [dashboardTab, roiTab]);
        if(!window.spectrumChartInit) {
            initSpectrumChart();
            window.spectrumChartInit = true;
        }
    });

    // Spectrum Chart Logic
    function initSpectrumChart() {
        const specCtx = document.getElementById('spectrumLiveChart').getContext('2d');
        const labels = [];
        for(let i=400; i<=1000; i+=2) {
            labels.push(i);
        }

        function generateSpectrumData(baseline, noise, peak1, peak2) {
            return labels.map(x => {
                let y = baseline + (Math.random() * noise - noise/2);
                y += peak1 * Math.exp(-Math.pow(x - 700, 2) / 20000); 
                y += peak2 * Math.exp(-Math.pow(x - 850, 2) / 10000);
                if(x < 450 || x > 950) y += (Math.random() * noise * 3);
                return Math.max(0, y);
            });
        }

        window.liveSpectrumChart = new Chart(specCtx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Pixel Reflectance',
                    data: generateSpectrumData(0.05, 0.02, 0.3, 0.4),
                    borderColor: '#1f77b4',
                    borderWidth: 1.5,
                    pointRadius: 0,
                    tension: 0.1,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: { duration: 0 },
                scales: {
                    x: {
                        title: { display: true, text: 'Wavelength (nm)', color: '#666' },
                        grid: { color: '#e5e7eb' },
                        ticks: { color: '#666' }
                    },
                    y: {
                        title: { display: true, text: 'Intensity', color: '#666' },
                        min: -0.05, max: 0.55,
                        grid: { color: '#e5e7eb' },
                        ticks: { color: '#666' }
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
        
        setInterval(() => {
            if(spectrumView.style.display !== 'none' && window.liveSpectrumChart) {
                const newX = Math.floor(100 + Math.random() * 100);
                const newY = Math.floor(100 + Math.random() * 100);
                
                document.querySelector('.pixel-info').innerHTML = `[X,Y] [${newX} ${newY}]<br>[Intensity] ${(0.2 + Math.random() * 0.2).toFixed(3)}`;
                
                const crossX = 30 + Math.random() * 40;
                const crossY = 30 + Math.random() * 40;
                document.querySelector('.crosshair').style.left = crossX + '%';
                document.querySelector('.crosshair').style.top = crossY + '%';

                window.liveSpectrumChart.data.datasets[0].data = generateSpectrumData(0.05, 0.02, 0.25 + Math.random()*0.1, 0.35 + Math.random()*0.1);
                window.liveSpectrumChart.update();
            }
        }, 1000);
    }

    // Language Toggle Helper
    function setLang(lang) {
        if(!translations[lang]) return;
        currentLang = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            let key = el.getAttribute('data-i18n');
            if(translations[lang][key]) {
                if (el.tagName === 'H2' && el.querySelector('i')) {
                    const iconHTML = el.querySelector('i').outerHTML;
                    el.innerHTML = `${iconHTML} <span data-i18n="${key}">${translations[lang][key]}</span>`;
                } else {
                    el.innerHTML = translations[lang][key]; 
                }
            }
        });
        
        document.getElementById('btn-lang-en').classList.remove('active');
        document.getElementById('btn-lang-vi').classList.remove('active');
        document.getElementById(`btn-lang-${lang}`).classList.add('active');
        
        const actRate = (acceptedCount / totalProcessed * 100).toFixed(1);
        const rjcRate = (rejectedCount / totalProcessed * 100).toFixed(1);
        document.querySelector('.dot.accepted').parentElement.innerHTML = `<span class="dot accepted"></span> ${translations[lang].chartAccepted} (${actRate}%)`;
        document.querySelector('.dot.rejected').parentElement.innerHTML = `<span class="dot rejected"></span> ${translations[lang].chartRejected} (${rjcRate}%)`;
    }

    document.getElementById('btn-lang-en').addEventListener('click', () => setLang('en'));
    document.getElementById('btn-lang-vi').addEventListener('click', () => setLang('vi'));
});
