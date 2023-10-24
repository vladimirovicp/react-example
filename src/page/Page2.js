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

      const fileJson = [{
        name: 'test',
        name2: 'test2'
    }];

      const handleSubmit = event => {
        handleSaveToPC(fileJson,'test');
      }


    return (
        <div className="App">
            <h1>Page 2 Save data json to PC</h1>
            <form onSubmit={handleSubmit}>
            <button type="submit">Save to PC</button>
            </form>
        </div>
    );
}

export default Page2;
