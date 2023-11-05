# Smart-PathLab

# CBC Analyzer Backend Server

The CBC Analyzer Backend Server is a critical component of the CBC Analyzer project, which empowers users to input their complete blood count (CBC) reports, instantly analyzes the data, and provides information about any detected abnormalities. This server serves as the API endpoint for the frontend, handling incoming data, comparing it with reference data stored in JSON format, and sending appropriate responses.

## Getting Started

These instructions will help you set up and run the CBC Analyzer Backend Server.

### Prerequisites

To run the server, you will need:

- Node.js: Make sure you have Node.js installed on your system. You can download it from [https://nodejs.org/](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/codex-06/Smart-PathLab
   ```

2. Navigate to the project directory:

   ```bash
   cd Smart-PathLab
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

### Running the Server

To start the server, run the following command:

```bash
npm start
```

The server will start on the configured port (default is 3000).

## API Endpoints

The CBC Analyzer Backend Server provides the following API endpoints for the frontend: 

- `POST /cbc`: This endpoint expects the CBC report data from the frontend. It analyzes the data, compares it with the reference data, and sends back an appropriate response.

### Request Example

Send a POST request to the `/cbc` endpoint with a JSON body containing the CBC report data. The structure should be similar to the one you mentioned in your initial question:

```json
{
  "info": {
    "age": 25,
    "sex": "female"
  },
  "report": {
    "White Blood Cell (WBC)": 1,
    "Mean Platelet Volume (MPV)": 10,
    "Mean Cell Hemoglobin Concentration (MCHC)": 34
  }
}
```

### Response Example

The server will respond with JSON data that includes information about any detected abnormalities:

```json
{
  "White Blood Cell (WBC)": {
    "description": "White blood cells are like the body's security force. They help protect you from germs and infections.",
    "result": "below limit",
    "effects": "If your security force is understaffed, you could catch infections more easily. You might feel tired and weak because your body can't defend itself properly.",
    "causes": [
      "If you have too few white blood cells, it could be a sign that your body isn't making them properly. Some medications can also reduce the number of these little soldiers."
    ],
    "preventions": [
      "Maintaining a healthy, balanced diet.",
      "Taking a daily vitamin and iron supplement, if needed.",
      "Exercising regularly to improve heart and lung function.",
      "Quitting smoking.",
      "Avoiding aspirin, which reduces clotting and can cause slow blood loss.",
      "Taking your thyroid medications as prescribed if you have thyroid problems."
    ]
  },
  "Mean Platelet Volume (MPV)": {
    "description": "MPV measures the average size of platelets in your blood.",
    "result": "ok"
  }
}
```

## Contributing

If you'd like to contribute to the CBC Analyzer Backend Server, please follow our feel free.


