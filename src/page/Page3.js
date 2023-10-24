import FileSaver from 'file-saver';

function Page3() {

    function saveJsonToFile(text, fileName) {
        // Convert the text to JSON format
        const jsonText = JSON.stringify(text);
      
        // Create a Blob object with the JSON data
        const blob = new Blob([jsonText], { type: 'application/json;charset=utf-8' });
      
        // Save the Blob object as a file
        FileSaver.saveAs(blob, fileName);
      }

    const response = 'your backend response or any other text';
    const fileName = 'your-file-name.json';

    const handleSubmit = event => {
        saveJsonToFile(response, fileName);
      }

    return (
        <div className="App">
            <h1>Page 3 Save to PC file-saver</h1>

            <form onSubmit={handleSubmit}>
            <button type="submit">Save to PC</button>
            </form>
        </div>
    );
}

export default Page3;
