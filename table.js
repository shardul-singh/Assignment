let tablefnc = () =>{
    document.querySelector("input").value = "Refresh data";
const obj = [
    {
      Roll: "1",
      FirstName: "Shardul",
      MiddleName: "ss",
      LastName: "Singh",
      Email: "shardul.singh@gmail.com",
      Phone: "8978977,",
      Address: "Varanasi",
    },
    {
      Roll: "2",
      FirstName: "Ashish",
      MiddleName: "Kumar",
      LastName: "Singh",
      Email: "ashish.singh@rediff.com",
      Phone: "67987080",
      Address: "Delhi",
    },
    {
        Roll: "3",
        FirstName: "Akash",
        MiddleName: "Kumar",
        LastName: "Singh",
        Email: "akash.singh@rediff.com",
        Phone: "679779870",
        Address: "Kanpur",
      },
  ];

  let column=[]
  for(let i=0;i < obj.length ; i++){
       for(let j in obj[i]){
           if(column.indexOf(j)===-1){
               column.push(j);
           }
       }
  }
  column.push("Modify");
  
  const table=document.getElementById("shown");
  table.innerHTML="";
  let tr=table.insertRow(-1);
  for (let i = 0; i < column.length; i++) {
    let th = document.createElement("th");
    th.innerHTML = column[i];
    tr.appendChild(th);
  }

  for (let i = 0; i < obj.length; i++) {
    tr = table.insertRow(-1);
    tr.id = "row" + obj[i]["Roll"];

    for (let j = 0; j < column.length - 1; j++) {
      let box = tr.insertCell(-1);

      //Id of box
      box.id = column[j] + obj[i]["Roll"];

      box.innerHTML = obj[i][column[j]];
    }
    // Modify Value
    let td = tr.insertCell(-1);
    td.innerHTML =
      "<input type='button' id='edit_btn" +
      obj[i]["Roll"] +
      "' value='Edit' onclick='edit_row(" +
      obj[i]["Roll"] +
      ")'> <input type='button' id='save_btn" +
      obj[i]["Roll"] +
      "' value='Save' onclick='save_row(" +
      obj[i]["Roll"] +
      ")'> <input type='button' id='cancel_btn" +
      obj[i]["Roll"] +
      "' value='Cancel' onclick='cancel_row(" +
      obj[i]["Roll"] +
      ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" +
      obj[i]["Roll"] +
      ")'>";
      

      
  }


};

//Delete Rows
let delete_row = (no) => {
    document.getElementById("row" + no + "").outerHTML = "";
  };
  
  //Edit Rows
  let edit_row = (no) => {
    document.getElementById("edit_btn" + no).style.display = "none";
    document.getElementById("save_btn" + no).style.display = "block";
  
    let rno = document.getElementById("Roll" + no);
    let fname = document.getElementById("FirstName" + no);
    let midname = document.getElementById("MiddleName" + no);
    let lname = document.getElementById("LastName" + no);
    let mail = document.getElementById("Email" + no);
    let mob = document.getElementById("Phone" + no);
    let address = document.getElementById("Address" + no);
  
    let rno_data = rno.innerHTML;
    let fname_data = fname.innerHTML;
    let midname_data = midname.innerHTML;
    let lname_data = lname.innerHTML;
    let mail_data = mail.innerHTML;
    let mob_data = mob.innerHTML;
    let address_data = address.innerHTML;
  
    rno.innerHTML =
      "<input type='text' id='Roll_text" +
      no +
      "' value='" +
      rno_data +
      "' name='" +
      rno_data +
      "'>";
    fname.innerHTML =
      "<input type='text' id='FirstName_text" +
      no +
      "' value='" +
      fname_data +
      "' name='" +
      fname_data +
      "'>";
    midname.innerHTML =
      "<input type='text' id='MiddleName_text" +
      no +
      "' value='" +
      midname_data +
      "' name='" +
      midname_data +
      "'>";
    lname.innerHTML =
      "<input type='text' id='LastName_text" +
      no +
      "' value='" +
      lname_data +
      "' name='" +
      lname_data +
      "'>";
    mail.innerHTML =
      "<input type='text' id='Email_text" +
      no +
      "' value='" +
      mail_data +
      "' name='" +
      mail_data +
      "'>";
    mob.innerHTML =
      "<input type='text' id='Phone_text" +
      no +
      "' value='" +
      mob_data +
      "' name='" +
      mob_data +
      "'>";
    address.innerHTML =
      "<input type='text' id='Address_text" +
      no +
      "' value='" +
      address_data +
      "' name='" +
      address_data +
      "'>";
  };
  
  //Save Row Func
  let save_row = (no) => {
    let rno_val = document.getElementById("Roll_text" + no).value;
    let fname_val = document.getElementById("FirstName_text" + no).value;
    let midname_val = document.getElementById("MiddleName_text" + no).value;
    let lname_val = document.getElementById("LastName_text" + no).value;
    let mail_val = document.getElementById("Email_text" + no).value;
    let mob_val = document.getElementById("Phone_text" + no).value;
    let address_val = document.getElementById("Address_text" + no).value;
  
    document.getElementById("Roll" + no).innerHTML = rno_val;
    document.getElementById("FirstName" + no).innerHTML = fname_val;
    document.getElementById("MiddleName" + no).innerHTML = midname_val;
    document.getElementById("LastName" + no).innerHTML = lname_val;
    document.getElementById("Email" + no).innerHTML = mail_val;
    document.getElementById("Phone" + no).innerHTML = mob_val;
    document.getElementById("Address" + no).innerHTML = address_val;
  
    document.getElementById("edit_btn" + no).style.display = "inline";
    document.getElementById("save_btn" + no).style.display = "inline";
  };
  
  //Cancel Row Fnc
  let cancel_row = (no) => {
    let rno_text = document.getElementById("Roll_text" + no).defaultValue;
    let name_text = document.getElementById("FirstName_text" + no).defaultValue;
    let mname_text = document.getElementById("MiddleName_text" + no).defaultValue;
    let lname_text = document.getElementById("LastName_text" + no).defaultValue;
    let mail_text = document.getElementById("Email_text" + no).defaultValue;
    let mob_text = document.getElementById("Phone_text" + no).defaultValue;
    let address_text = document.getElementById("Address_text" + no).defaultValue;
  
    document.getElementById("Roll" + no).innerHTML = rno_text;
    document.getElementById("FirstName" + no).innerHTML = name_text;
    document.getElementById("MiddleName" + no).innerHTML = mname_text;
    document.getElementById("LastName" + no).innerHTML = lname_text;
    document.getElementById("Email" + no).innerHTML = mail_text;
    document.getElementById("Phone" + no).innerHTML = mob_text;
    document.getElementById("Address" + no).innerHTML = address_text;
  
    document.getElementById("cancel_btn" + no).style.display = "inline";
    document.getElementById("edit_btn" + no).style.display = "inline";
    document.getElementById("save_btn" + no).style.display = "inline";
  };
   
 