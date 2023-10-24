function Page2() {
    const handleSaveToPC = (jsonData,filename) => {
        const fileData = JSON.stringify(jsonData);
        const blob = new Blob([fileData], {type: "text/plain"});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `${filename}.json`;
        link.href = url;
        link.click();
      }
      

          // 👇 Uploading the file using the fetch API to the server
    const handleSaveToFolder = async (jsonData,filename) => {
      const fileData = JSON.stringify(jsonData), formData = new FormData();
      
      formData.append('file', fileData);

      await fetch(`${process.env.PUBLIC_URL}/src/test.json`, {
        method: 'POST', 
        proxy: "http://localhost:3000",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: fileData,
        referrer: 'no-referrer'
      })
      //const data = await res.json
    }

      const fileJson = [{
        name: 'test',
        name2: 'test2'
    }];

      const handleSubmit = event => {
        event.preventDefault();
     //   handleSaveToPC(fileJson,'test');
        handleSaveToFolder(fileJson, 'test')
      }


    return (
        <div className="App">
            <h1>Page 2 Save data json to PC</h1>
            <form onSubmit={handleSubmit}>
            <button type="submit">Save yo PC</button>
            </form>
        </div>
    );
}

export default Page2;
