const ctx1 = document.getElementById('bepChart');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Break Even Capacity'],
        datasets: [{
            label: 'BEP (%)',
            data: [56],
            backgroundColor: '#8b0000'
        }]
    }
});

const ctx2 = document.getElementById('cashChart');
new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Year 1','Year 2','Year 3','Year 4','Year 5'],
        datasets: [{
            label: 'Cash Flow (Billion IDR)',
            data: [110,220,330,440,550],
            borderColor: '#ffffff'
        }]
    }
});
