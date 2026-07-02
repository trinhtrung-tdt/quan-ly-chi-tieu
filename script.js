// Hiệu ứng tương tác đơn giản khi bấm vào nút tải app
document.getElementById('downloadBtn').addEventListener('click', function(e) {
    // Nếu chưa lên Store, tạm thời thông báo cho người dùng
    e.preventDefault();
    alert("Ứng dụng Fin sắp có mặt trên App Store và Google Play! Vui lòng quay lại sau.");
    
    // Sau này khi có link thật, bạn chỉ cần xóa đoạn code trên đi và thay thế bằng link store vào thuộc tính href trong file HTML.
});