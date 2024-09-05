document.querySelector('.mobile-menu').addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.remove('closed-menu');
    mobileNav.classList.add('open-menu');
  });
  
  document.querySelector('.tabler-icon').addEventListener('click', () => {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.remove('open-menu');
    mobileNav.classList.add('closed-menu');
  });

  


  var inputs = document.getElementsByTagName('input');

  for (var i=0; i<inputs.length; i++)  {
    if (inputs[i].type == 'checkbox')   {
      inputs[i].checked = false;
    }
  }




  const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
  const clone = item.cloneNode(true);
  carousel.appendChild(clone);
});


document.getElementById('Switch').addEventListener('change', function() {
  document.body.classList.toggle('dark');
});

document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const discordWebhookURL = 'https://canary.discord.com/api/webhooks/1277336368506474518/SPm2HP8xiFEnnmYxn_vT9V-MFc55NOnNUHjerREK54tjtiA74bMNPU4KxL_jx2zspeJc';
  
  const discordUsername = document.getElementById('discordUsername').value;
  const robloxUsername = document.getElementById('robloxUsername').value;
  const robuxRange = document.getElementById('robuxRange').value;
  const usdRange = document.getElementById('usdRange').value;
  const description = document.getElementById('description').value;
  
  let priceField = null;
  if (robuxRange && document.getElementById('robuxRange').style.display !== 'none') {
    priceField = { name: "Price Range (Robux)", value: robuxRange, inline: false };
  } else if (usdRange && document.getElementById('usdRange').style.display !== 'none') {
    priceField = { name: "Price Range (USD)", value: usdRange, inline: false };
  } else {
    alert('Please enter a value for either Robux or USD.');
    return;
  }

  const data = {
    embeds: [{
      title: "New Order",
      fields: [
        {
          name: "Discord Username",
          value: discordUsername,
          inline: true
        },
        {
          name: "Roblox Username",
          value: robloxUsername || "Not provided",
          inline: true
        },
        {
          name: "Order Description",
          value: description
        },
        priceField
      ],
      footer: {
        text: "Sent From The Website"
      },
      timestamp: new Date().toISOString()
    }]
  };

  fetch(discordWebhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      alert('Order submitted successfully!');
      document.getElementById('orderForm').reset();
      document.getElementById('robuxRange').style.display = 'block';
      document.getElementById('usdRange').style.display = 'none';
      document.getElementById('toggleCurrency').innerHTML = '&nbsp; Switch to &nbsp;USD';
    } else {
      alert('There was an issue submitting your order. Please contact me directly.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('There was an error submitting your order. Please contact me directly.');
  });
});


document.getElementById('toggleCurrency').addEventListener('click', function() {
  const robuxInput = document.getElementById('robuxRange');
  const usdInput = document.getElementById('usdRange');
  const toggleButton = document.getElementById('toggleCurrency');

  if (robuxInput.style.display === 'none') {
    robuxInput.style.display = 'block';
    usdInput.style.display = 'none';
    toggleButton.innerHTML = '&nbsp; Switch to &nbsp;USD';
  } else {
    robuxInput.style.display = 'none';
    usdInput.style.display = 'block';
    toggleButton.textContent = 'Switch to Robux';
  }
});
