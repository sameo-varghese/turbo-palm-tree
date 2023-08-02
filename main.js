function getData() {
    return new Promise((resolve)=>{
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            
            if (xhttp.readyState === 4 && xhttp.status == 200) {
                
                var users = JSON.parse(this.responseText)
                let output=
                `<tr>
                <th scope="col">User </th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Completed</th>
              </tr>  `;
                for(let i=0;i<users.length;i++){
                    var checked 
                    if(users[i].completed) checked='checked'
                    else checked=''
                    output+=`<tr border="2px">
                    <td scope="col">${users[i].userId}</td>
                    <td scope="col">${users[i].id}</td>
                    <td scope="col">${users[i].title}</td>
                    <td scope="col"><input type="checkbox" name="name1" data-index="${i}" ${checked}/>&nbsp;</td>
                  </tr>`  
                }
              
                resolve(output)
            }
        }
    
        xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
        xhttp.send();
    })
 
}

// function ChangeData(){
//     getData().then((response)=>{
//         document.getElementById('table').innerHTML = response;
//     })
// }
function ChangeData() {
    getData().then((response) => {
      document.getElementById('table').innerHTML = response;
  
      // Attach event listeners to checkboxes
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let markedCount = 0;
  
      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', () => {
          if (checkbox.checked) {
            markedCount++;
            if (markedCount >= 5) {
              // Five checkboxes are marked, show the popup message
              showPopupMessage('Five checkboxes are marked!');
            }
          } else {
            markedCount--;
          }
        });
      });
    });
  }

function showPopupMessage(message) {
   
    alert(message);
}
// showPopupMessage("Five checkboxes are marked!");
