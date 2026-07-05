# Playfair Cipher | شيفرة بلايفير

A web-based implementation of the Playfair cipher encryption algorithm, with an interactive animation mode that visually demonstrates how the cipher works step by step.

تطبيق ويب لتشفير النصوص باستخدام خوارزمية شيفرة بلايفير، مع وضع أنيميشن تفاعلي يوضح خطوات التشفير بصرياً.

## 🔗 Live Demo | تجربة مباشرة

**[Try it here | جرّبه من هنا](https://akrmkhaled.github.io/playfair/)**

---

## About Playfair Cipher | عن شيفرة بلايفير

The Playfair cipher is a classical encryption technique that encrypts pairs of letters (digraphs) instead of single letters. It uses a 5×5 matrix built from a keyword to perform the encryption.

شيفرة بلايفير هي تقنية تشفير كلاسيكية تقوم بتشفير أزواج من الأحرف بدلاً من حرف واحد. تعتمد على مصفوفة 5×5 يتم بناؤها من كلمة مفتاحية.

---

## How It Works | كيف يعمل التطبيق

### Step 1: Build the 5×5 Matrix | الخطوة 1: بناء المصفوفة

The key is used to fill a 5×5 matrix. Duplicate letters are removed, and the letter **J** is merged with **I** (since the matrix only fits 25 letters). The remaining alphabet letters fill the rest of the matrix.

يتم استخدام المفتاح لملء مصفوفة 5×5. تُحذف الأحرف المكررة، ويُدمج الحرف **J** مع **I** (لأن المصفوفة تتسع لـ 25 حرفاً فقط). ثم تُملأ بقية المصفوفة بأحرف الأبجدية المتبقية.

**Example | مثال:** Key = `MONARCHY`

|   |   |   |   |   |
|---|---|---|---|---|
| M | O | N | A | R |
| C | H | Y | B | D |
| E | F | G | I | K |
| L | P | Q | S | T |
| U | V | W | X | Z |

### Step 2: Prepare the Plaintext | الخطوة 2: تجهيز النص

- The plaintext is converted to uppercase and non-letter characters are removed.
- **J** is replaced with **I**.
- The text is split into pairs of two letters.
- If both letters in a pair are the same, an **X** is inserted between them.
- If the text has an odd number of letters, an **X** is added at the end.

- يُحوَّل النص إلى أحرف كبيرة وتُحذف الأحرف غير الأبجدية.
- يُستبدل حرف **J** بحرف **I**.
- يُقسَّم النص إلى أزواج من حرفين.
- إذا كان الحرفان في الزوج متماثلين، يُدرج حرف **X** بينهما.
- إذا كان عدد الأحرف فردياً، يُضاف **X** في النهاية.

**Example | مثال:** `HELLO` → `HE LX LO`

### Step 3: Apply Encryption Rules | الخطوة 3: تطبيق قواعد التشفير

For each pair of letters, find their positions in the matrix and apply one of three rules:

لكل زوج من الأحرف، يتم تحديد موقعهما في المصفوفة وتطبيق إحدى القواعد الثلاث:

#### Rule 1: Same Row | القاعدة 1: نفس الصف
Each letter is replaced by the letter to its **right** (wrapping around to the beginning if needed).

يُستبدل كل حرف بالحرف الذي على **يمينه** (مع الالتفاف إلى البداية إذا لزم الأمر).

#### Rule 2: Same Column | القاعدة 2: نفس العمود
Each letter is replaced by the letter **below** it (wrapping around to the top if needed).

يُستبدل كل حرف بالحرف الذي **أسفله** (مع الالتفاف إلى الأعلى إذا لزم الأمر).

#### Rule 3: Rectangle | القاعدة 3: مستطيل
Each letter is replaced by the letter in its **own row** but in the **other letter's column**.

يُستبدل كل حرف بالحرف الذي في **صفه نفسه** لكن في **عمود الحرف الآخر**.

### Step 4: Get the Result | الخطوة 4: الحصول على النتيجة

The encrypted pairs are joined together to form the final ciphertext.

تُجمع الأزواج المشفرة معاً لتكوين النص المشفر النهائي.

---

## How to Use the App | كيفية استخدام التطبيق

1. **Enter the key** — Type an encryption key (e.g., `MONARCHY`).
2. **Enter the plaintext** — Type the message you want to encrypt.
3. **Choose a mode:**
   - **"goin"** — Direct encryption. Shows the matrix and the result immediately.
   - **"with animations"** — Animated mode. Shows each pair being encrypted step by step with color highlights on the matrix.

---

1. **أدخل المفتاح** — اكتب كلمة مفتاحية (مثلاً `MONARCHY`).
2. **أدخل النص** — اكتب الرسالة المراد تشفيرها.
3. **اختر الوضع:**
   - **"goin"** — تشفير مباشر. يعرض المصفوفة والنتيجة فوراً.
   - **"with animations"** — وضع الأنيميشن. يعرض تشفير كل زوج خطوة بخطوة مع تلوين الخلايا في المصفوفة.

---

## Project Structure | هيكل المشروع

```
playfair/
├── index.html          # Main page | الصفحة الرئيسية
├── index.css           # Main page styles | تنسيقات الصفحة الرئيسية
├── page2.html          # Result page | صفحة النتيجة
├── main.js             # Encryption logic | منطق التشفير
├── main.css            # Result page styles | تنسيقات صفحة النتيجة
└── animation/
    ├── page2.html      # Animated page | صفحة الأنيميشن
    ├── main.js         # Animation + encryption | الأنيميشن + التشفير
    └── main.css        # Animation styles | تنسيقات الأنيميشن
```

## Technologies | التقنيات

- HTML
- CSS (Keyframe Animations)
- JavaScript (Vanilla)
