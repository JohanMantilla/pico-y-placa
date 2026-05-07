document.getElementById('form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const plate = document.getElementById('licensePlate').value.trim().toUpperCase();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const resultEl = document.getElementById('result');
    const resultTitle = document.getElementById('result-title');
    const resultSub = document.getElementById('result-sub');
    const loading = document.getElementById('loading');

    if (!plate || !date || !time) {
        showResult('error', 'Campos incompletos', 'Por favor completa todos los campos.');
        return;
    }

    resultEl.style.display = 'none';
    loading.style.display = 'block';

    try {
        const res = await fetch('/api/v1/vehicle-restriction', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ licensePlate: plate, date, time })
        });

        const data = await res.json();
        loading.style.display = 'none';

        if (res.ok) {
            showResult('success',
                'Puede circular',
                `La placa ${data.licensePlate} no tiene restricción el ${data.date} a las ${data.time}.`
            );
        } else {
            showResult('error',
                'No puede circular',
                data.message ?? 'El vehículo tiene restricción de pico y placa en ese horario.'
            );
        }
    } catch (error) {
        console.log('Error capturado:', error); 
        loading.style.display = 'none';
        showResult('error', 'Error de conexión', 'Verifica que el backend esté corriendo.');
    }

    function showResult(type, title, sub) {
        resultEl.className = `result ${type}`;
        resultEl.style.display = 'block';
        resultTitle.textContent = title;
        resultSub.textContent = sub;
    }
});