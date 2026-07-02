// Hiệu ứng tương tác đơn giản khi bấm vào nút tải app
document.getElementById('downloadBtn').addEventListener('click', function(e) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Nếu là iPhone / iPad
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.href = "https://apps.apple.com/vn/app/id-cua-app-ban"; 
        e.preventDefault();
    }
    // Nếu là điện thoại Android
    else if (/android/i.test(userAgent)) {
        window.location.href = "https://play.google.com/store/apps/details?id=com.trinhtrung.qlct&pcampaignid=web_share";
        e.preventDefault();
    }
    // Nếu dùng máy tính (PC/Laptop), giữ nguyên để link chạy về trang đích mặc định bạn đã gán ở file HTML
});
