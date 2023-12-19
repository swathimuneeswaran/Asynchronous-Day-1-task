function startCountdown() {
    var count = 10;
    var countdownElement = document.getElementById('countdown');
  
    function updateCount() {
      countdownElement.innerHTML = count;
  
      if (count > 0) {
        count--;
        setTimeout(updateCount, 1000);
      } 
      else
       {
       
        setTimeout(function() {
          countdownElement.innerHTML = 'Happy Independence Day!🎌';
        }, 1000);
      }
    }
  
   
    setTimeout(updateCount, 1000);
  }

  startCountdown();