<script setup></script>


<template>
  <div class="flex flex-col-reverse lg:flex-row items-center">
    
    <!-- الجزء النصي -->
    <div class="w-full lg:w-7/12 px-6 sm:px-12 py-12">
      <div class="container mx-auto">
        <!-- العنوان -->
        <nav class="flex justify-between items-center mb-6">
          <div class="text-4xl font-bold text-gray-800">
            جمعية الشباب الليبي للمناظرة<span class="text-[#046c4e]">.</span>
          </div>
        </nav>
        
        <header class="mt-6 lg:mt-12">
          <h1 class="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            تشكيل قادة الغد، اليوم
          </h1>
          <div class="w-24 h-1 bg-[#046c4e] my-4"></div>
          <p class="text-lg text-gray-700 mb-8 leading-relaxed">
            نحن مجموعة من الشباب الطموحين ملتزمون بتعزيز التفكير النقدي، وتشجيع المشاركة المدنية، وتنمية مهارات القيادة لبناء وطن أقوى وأكثر وعيًا.
          </p>
          
          <!-- زر دعوة إلى الإجراء -->
          <button class="bg-[#046c4e] transition text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transform hover:scale-105 duration-300">
            قراءة المزيد
          </button>
        </header>
      </div>
    </div>

    <!-- صورة توضيحية -->
    <div class="w-full lg:w-5/12">
      <img 
        class="w-full lg:max-w-xl mx-auto rounded-lg shadow-lg hover:scale-105 transition duration-300"
        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Leadership Image"
      >
    </div>

  </div>
</template>


<style></style>