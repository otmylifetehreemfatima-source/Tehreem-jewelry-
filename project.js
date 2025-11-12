const orderForm = document.querySelector('.order-form');

orderForm.addEventListener('submit', function(e) {
  e.preventDefault(); // prevent page reload

  const name = this.querySelector('input[placeholder="Full Name"]').value;
  const email = this.querySelector('input[placeholder="Email Address"]').value;
  const jewelry = this.querySelector('input[placeholder="Jewelry Name"]').value;
  const quantity = this.querySelector('input[placeholder="Quantity"]').value;

  // Fake Email Popup Simulation
  const fakeEmail = document.createElement('div');
  fakeEmail.classList.add('fake-email');
  fakeEmail.innerHTML = `
    <div class="email-box">
      <h2> Order Confirmation</h2>
      <p>To: <b>${email}</b></p>
      <p>Subject: Your Aureth Jewelry Order is confirmation</p>
      <p>Dear ${name},</p>
      <p>Thank you for ordering <b>${quantity}</b> piece(s) of <b>${jewelry}</b>.</p>
      <p>Your order is being processed. We’ll notify you once it’s shipped!</p>
      <button class="close-email">Close</button>
    </div>
  `;

  document.body.appendChild(fakeEmail);

  document.querySelector('.close-email').addEventListener('click', () => {
    fakeEmail.remove();
  });
});

