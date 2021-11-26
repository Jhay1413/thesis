 async function savefile(){
          let formData = new FormData();
          formData.append("file", fileupload.files[0]);
          await fetch('../php/upload.php',{method: "POST", body: formData});
         location.reload();
        return false;

}