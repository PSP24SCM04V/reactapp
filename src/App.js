import './App.css';
import React, { useState, useEffect } from 'react';

// export function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export function Requirement1(){
  return (
    <div class="main-div">
      <h1>Requirement 1: A Line Chart to plot the issues for every Repo</h1>
      <FetchAPI URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issuesline" />
    </div>
  )
}

export function Requirement2(){
  return (
    <div class="main-div">
    <h1>Requirement 2: A Bar Chart to plot the issues created for every month for every Repo</h1>
    <div class="grid-container">
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issues/created/repo=1" />
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issues/created/repo=2" />
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issues/created/repo=3" />
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issues/created/repo=4" />
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issues/created/repo=5" />
    </div>
  </div>
)
}
export function Requirement3(){
  return (
    <div class="main-div">
    <h1>Requirement 3: A Bar Chart to plot the stars for every Repo</h1>
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/stars" />
  </div>
)
}

export function Requirement4(){
  return (
    <div class="main-div">
    <h1>Requirement 4: A Bar Chart to plot the forks for every Repo</h1>
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/forks" />
  </div>
)
}
export function Requirement5() {
  return (
    <div class="main-div">
      <h1>Requirement 5: A Bar Chart to plot the issues closed for every week for everyRepo</h1>
      <div class="grid-container">
        {[...Array(5).keys()].map((repo) => (
          <FetchAPI class="grid-item" key={repo + 1} URL={`https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issues/closed/repo=${repo + 1}`} />
        ))}
      </div>
    </div>
  );
}

export function Requirement6(){
  return (
    <div class="main-div">
    <h1>Requirement 6: A Stack-Bar Chart to plot the created and closed issues for every Repo</h1>
      <FetchAPI class="grid-item" URL="https://a5flaskapp-22zhwxyxiq-uc.a.run.app/fetch/issues/stacked" />
  </div>
  )
}

let repos = ["openai/openai-cookbook","elastic/elasticsearch","openai/openai-python","milvus-io/pymilvus/","SebastianM/angular-google-maps"];
let server_url = "https://a5lstmflaskapp-rnadjvgwua-uc.a.run.app";

export function Requirement8_1(){
  return (
    <div class="main-div">
      <h1>Requirement 8.1</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.1 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.1/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.1/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.1/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement8_2(){
  return (
    <div class="main-div">
      <h1>Requirement 8.2</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.2 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.2/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.2/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.2/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement8_3(){
  return (
    <div class="main-div">
      <h1>Requirement 8.3</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.3 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.3/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.3/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.3/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement8_4(){
  return (
    <div class="main-div">
      <h1>Requirement 8.4</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.4 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.4/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.4/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.4/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement8_5(){
  return (
    <div class="main-div">
      <h1>Requirement 8.5</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.5 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.5/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.5/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.5/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function Requirement8_6(){
  return (
    <div class="main-div">
      <h1>Requirement 8.6</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.6 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.6/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.6/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.6/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}
export function Requirement8_7(){
  return (
    <div class="main-div">
      <h1>Requirement 8.7</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.7 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.7/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.7/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.7/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}
export function Requirement8_8(){
  return (
    <div class="main-div">
      <h1>Requirement 8.8</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.8 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.8/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.8/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.8/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}
export function Requirement8_9(){
  return (
    <div class="main-div">
      <h1>Requirement 8.9</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.9 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.9/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.9/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.9/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}
export function Requirement8_10(){
  return (
    <div class="main-div">
      <h1>Requirement 8.10</h1>
        {[...Array(5).keys()].map((repo) => (
          <div>
            <h2>8.10 - Repository: {repos[repo]}</h2>
            <div class="grid-container">
            <h3>LSTM Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/lstm/8.10/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>StatsModel Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/sm/8.10/reponum=${repo + 1}`} />
            </div>
            <div class="grid-container">
            <h3>Prophet Forecasting</h3>
            <FetchAPI class="grid-item" URL={`${server_url}/fetch/ph/8.10/reponum=${repo + 1}`} />
            </div>
          </div>
        ))}
    </div>
  );
}


function FetchAPI({ URL }) {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error('Failed to fetch image');
        }

        // Convert the image response to a blob
        const imageBlob = await response.blob();

        // Create a blob URL for the image
        const imageUrl = window.URL.createObjectURL(imageBlob);

        // Set the image URL in the state
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, [URL]);

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt="Image from flask app" />}
    </div>
  );
}

export default FetchAPI;

