const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const bookingForm = document.getElementById('bookingForm');
const formFeedback = document.getElementById('formFeedback');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

bookingForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(bookingForm);
  const name = data.get('name');
  const service = data.get('service');
  const date = data.get('date');

  formFeedback.textContent = `Thank you, ${name}. Your ${service} request for ${date} is confirmed—we will text your arrival details shortly.`;
  bookingForm.reset();
});