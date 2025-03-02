function showDetails(id) {
    
    var details = document.querySelectorAll('.details');
    details.forEach(function(detail) {
        detail.style.display = 'none';
    });

    var selectedDetail = document.getElementById(id);
    selectedDetail.style.display = 'block';
}