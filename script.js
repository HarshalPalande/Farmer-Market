document.addEventListener('DOMContentLoaded', async () => {
    const response = await fetch('http://localhost:5000/api/produce');
    const produceList = await response.json();
  
    const produceDiv = document.getElementById('produce-list');
    produceList.forEach(item => {
      const div = document.createElement('div');
      div.className = 'produce-item';
      div.innerHTML = `
        <h3>${item.name}</h3>
        <p>Quantity: ${item.quantity}</p>
        <p>Price: ₹${item.price}</p>
        <p>Farmer: ${item.farmerId.name}</p>
      `;
      produceDiv.appendChild(div);
    });
  });
  