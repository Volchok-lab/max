document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ОТПРАВКА ФОРМЫ В TELEGRAM
    const orderForm = document.getElementById('tg-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем значения полей
            const item = document.getElementById('form-item').value;
            const size = document.getElementById('form-size').value || 'не указан';
            const name = document.getElementById('form-name').value || 'Клиент';
            
            // Формируем текст сообщения для менеджера
            const message = `Здравствуйте! Меня зовут ${name}. Хочу заказать: ${item}. Размер: ${size}.`;
            
            // Ссылка на ТГ с автозаполнением сообщения
            const tgUrl = `https://t.me/PoizonExpress_by?text=${encodeURIComponent(message)}`;
            
            // Редирект в Telegram
            window.location.href = tgUrl;
        });
    }

    // 2. FAQ (АККОРДЕОН)
    const faqItems = document.querySelectorAll('.faq__item');
    faqItems.forEach((item) => {
        item.addEventListener('toggle', () => {
            const icon = item.querySelector('summary i');
            if (item.open) {
                icon.className = 'fas fa-chevron-up';
                // Закрываем другие, если открыли этот
                faqItems.forEach(other => {
                    if (other !== item && other.open) other.open = false;
                });
            } else {
                icon.className = 'fas fa-chevron-down';
            }
        });
    });

    // 3. ПЛАВНЫЙ СКРОЛЛ
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});