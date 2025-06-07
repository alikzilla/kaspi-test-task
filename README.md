## Тестовое задание для Каспи
---

### Используемые технологии

* **React** (CRA)
* **TypeScript**
* **React Router**
* **Tailwind CSS**
* **i18next** — интернационализация
* **GH Pages** — деплой

---

### Инструкция по запуску

1. **Клонируйте репозиторий**

```bash
git clone https://github.com/alikzilla/kaspi-test-task.git
cd kaspi-test-task
```

2. **Установите зависимости**

```bash
npm install
```

3. **Запустите сервер**

```bash
npm run start
```

4. **Открой в браузере**

```
http://localhost:3000
```

---

### Переводы (i18n)

* Файлы переводов: `src/assets/locales/ru.json`, `src/assets/locales/kz.json`
* Языковой переключатель: `src/components/common/language-selector/language-selector.tsx`
* Выбранный язык сохраняется в `localStorage`

---

### Данные

`public/data/orders.json`

Пример:

```json
[
  {
    "orderNumber": "412345678",
    "items": ["Advanti T02-C03 универсальный красный, черный"],
    "status": {
      "title": "Выдан",
      "type": "OK"
    }
  },
]
```
