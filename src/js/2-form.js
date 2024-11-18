console.log(Form);
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Ініціалізація об'єкта formData
let formData = { email: '', message: '' };

// 1. Відновлення даних з локального сховища під час завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || ''; // Заповнюємо поле email
    form.elements.message.value = formData.message || ''; // Заповнюємо поле message
  }
});

// 2. Прослуховування події input
form.addEventListener('input', (event) => {
  const { name, value } = event.target;

  // Оновлення об'єкта formData
  formData[name] = value.trim();

  // Збереження даних у локальне сховище
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Обробка події submit
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Відміна перезавантаження сторінки

  // Перевірка заповнення обох полів
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  // Виведення даних у консоль
  console.log('Form submitted:', formData);

  // Очищення сховища, форми та об'єкта formData
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
});