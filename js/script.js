window.onload = () => {
    let button = document.querySelector("#btn");
    let hasil = document.querySelector("#hasil");
    let kondisi = document.querySelector("#kondisi");
    let reset = document.getElementById("reset");

    // Sembunyikan hasil ketika tombol reset diklik
    reset.addEventListener("click", () => {
        clear();
        kondisi.style.display = "none";
   });
 
    // Function untuk menghitung BMI
    button.addEventListener("click", () => {
        calculateBMI();
    });
    
};
 
function calculateBMI() {
 
    // Mendapatkan masukan dari user ke dalam variabel tinggi.
    // Inputnya berupa string sehingga diperlukan typecasting.
    let height = parseInt(document
        .querySelector("#height").value);
 
    // Mendapatkan masukan dari user ke dalam variabel berat.
    // Inputnya berupa string sehingga diperlukan typecasting.
    let weight = parseInt(document
        .querySelector("#weight").value);
    
    // Mendapatkan masukan dari user ke dalam variabel berat.
    // Inputnya berupa string sehingga diperlukan typecasting.
    let umur = parseInt(document.
        querySelector("#age").value);
 
    let result = document.querySelector("#result");
    let quality = document.querySelector("#hasilKualitas");
    let detail = document.querySelector("#detail");
    let label = document.querySelector("#label-result");
    let article = document.querySelector("#detail-label");
    let conditions = document.getElementById("hasilConditions");
    let penyakit = document.getElementById("penyakit");
    let sex = document.querySelector('input[name="sex"]:checked');
    
    // Checking input
    
    if (weight === "" || isNaN(weight)) 
    alert("Tolong isi beratnya 😊");

    else if (umur === "" || isNaN(umur))
    alert("Tolong isi umurnya 😊");

    else if (umur < 18)
    alert("Mohon maaf umur minimal 18 😊");

    else if (height === "" || isNaN(height)) 
    alert("Tolong isi tingginya 😊");

    else if (!sex)
    alert("Mohon jenis kelamin dipilih");

// Jika keempat input valid, kalkulasi BMI
    else {
        
        // Rumus BMI
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
                            
                            // Pemisah antara kategori per BMI
        if (bmi < 18.5) {
            kondisi.style.display = "block";
            result.innerHTML =
            `${bmi}`;
            quality.innerHTML =
            `Berat badan kurang`
            detail.innerHTML =
            `Anda kekurangan berat badan.`
            label.innerHTML =
            `Hasil BMI kurang dari 18.5`
            article.innerHTML =
            `Anda berada dalam kategori kekurangan berat badan.
            Hubungi dokter lebih lanjut mengenai pola makan dan gizi yang baik untuk meningkatkan kesehatan.`
            conditions.innerHTML =
            `Berat rendah dapat menyebabkan berbagai masalah penyakit`
            penyakit.innerHTML =
            `Infertilitas<br>
            Anemia<br>
            Osteoporosis<br>
            Sistem Imun Lemah`
            
        }
 
        else if (bmi >= 18.5 && bmi < 25) { 
            kondisi.style.display = "none";
            result.innerHTML = 
            `${bmi}`;
            quality.innerHTML =
            `Normal`
            detail.innerHTML =
            `Hebat!!<br>
            Anda memiliki berat badan ideal.`
            label.innerHTML =
            `Hasil BMI diantara 18.6 dan 24.9`
            article.innerHTML =
            `Anda berada dalam kategori berat badan yang normal.
            Tetap pertahankan berat badan Anda dan jaga berat badan Anda dengan mengatur keseimbangan antara pola makan dan aktivitas fisik Anda.`
        }

        else if (bmi >= 25 && bmi < 30) {
            kondisi.style.display = "block";
            result.innerHTML = 
            `${bmi}`;
            quality.innerHTML =
            `Berat badan lebih`  
            detail.innerHTML =
            `Anda kelebihan berat badan.` 
            label.innerHTML =
            `Hasil BMI di antara 25 dan 29.9`
            article.innerHTML =
            `Anda berada dalam kategori overweight atau berat badan berlebih.
            Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga.<br>
            Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.` 
            conditions.innerHTML =
            `Beberapa penyakit yang berasal dari kegemukan`
            penyakit.innerHTML =
            `Diabetes<br>
            Hipertensi<br>
            Sakit Jantung<br>
            Osteoarthritis`
            }

            else { 
            kondisi.style.display = "block";
            result.innerHTML =
            `${bmi}`;
            quality.innerHTML =
            `Obesitas`
            detail.innerHTML =
            `Anda terkategori obesitas!`
            label.innerHTML =
            `Hasil BMI lebih dari 30`
            article.innerHTML =
            `Anda berada dalam kategori obesitas. <br>
            Usahakan untuk menurunkan berat badan dan menerapkan pola hidup sehat dengan menjaga makan dan aktivitas fisik. <br>
            Segera kunjungi dokter untuk dilakukan pemeriksaan kesehatan lanjutan untuk mengetahui risiko yang Anda miliki terkait berat badan Anda.`
            conditions.innerHTML =
            `Beberapa penyakit yang berasal dari kegemukan`
            penyakit.innerHTML =
            `Diabetes<br>
            Hipertensi<br>
            Sakit Jantung<br>
            Osteoarthritis`
        }
        hasil.style.display = "block";
    }
    window.location.href = '#hasil'
    
}
console.log(`${bmi}`)

// clear function
function clear () {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('age').value = '';
    hasil.style.display = 'none';
}