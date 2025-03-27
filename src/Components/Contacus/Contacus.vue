<script setup></script>

<template>
<section class="py-12 px-6 bg-gray-100">
    <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-[#046c4e] mb-10">إنضم إلينا</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg">
            
            <div>
                <h3 class="text-2xl font-semibold text-gray-800 text-right">تواصل معنا</h3>
                <form class="mt-6 space-y-4">
                    
                    <input type="text" placeholder="الاسم الكامل" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#046c4e]">
                    
                    <input type="email" placeholder="البريد الإلكتروني" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#046c4e]">
                    
                    <textarea placeholder="رسالتك" rows="4" class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#046c4e]"></textarea>
                    
                    <button type="submit" class="w-full bg-[#046c4e] text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition">إرسال الرسالة</button>
                </form>
            </div>

            <!-- معلومات التواصل -->
            <div class="space-y-6 text-right">
                <h3 class="text-2xl font-semibold text-gray-800">معلومات التواصل</h3>
                <p class="text-gray-600">نحن هنا لمساعدتك! لا تتردد في التواصل معنا عبر القنوات التالية:</p>
                
                <div class="space-y-4">
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 flex items-center justify-center text-white rounded-full border border-Green ">
                            📍
                        </div>
                        <p class="text-gray-700 text-lg">طرابلس، ليبيا</p>
                    </div>
                    
                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 flex items-center justify-center border border-Green text-white rounded-full">
                            📧
                        </div>
                        <p class="text-gray-700 text-lg">info@example.com</p>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="w-12 h-12 flex items-center justify-center border border-Green text-white rounded-full">
                            📞
                        </div>
                        <p class="text-gray-700 text-lg">+218 91 234 5678</p>
                    </div>
                </div>
            </div>

            <!-- فورم التواصل -->


        </div>
    </div>
</section>
    </template>

    <style></style>