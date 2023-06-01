import _ from "lodash";
import useSocials from "../talons/useSocials";

export const Socials = () => {
  const { socials } = useSocials();
  console.log(socials);

  return (
    <div className="max-w-[1200px] mx-auto flex text-[#ddd] py-3">
      <div className="flex-1 flex items-center justify-between mx-2">
        <span className="uppercase  font-bold text-lg">Follow us on</span>
        <div>
          {_.size(socials) > 0 ? (
            <div className="flex items-center gap-3">
              {socials.map((item) =>
                item.name === "facebook" && item.url && _.size(item.url) > 0 ? (
                  <span>
                    <svg
                      width="40px"
                      height="auto"
                      viewBox="0 0 24 24"
                      fill="#ddd"
                      xmlns="http://www.w3.org/2000/svg"
                      className="hover:fill-blue-600 transition-all duration-300"
                    >
                      <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </g>
                    </svg>
                  </span>
                ) : null
              )}
              {socials.map((item) =>
                item.name === "twitter" && item.url && _.size(item.url) > 0 ? (
                  <span>
                    <svg
                      width="35px"
                      height="auto"
                      version="1.1"
                      id="_x32_"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="#ffffff"
                      className="hover:fill-sky-500 transition-all duration-300"
                    >
                      <g>
                        <path
                          class="st0"
                          d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M256,448
		c-105.869,0-192-86.131-192-192S150.131,64,256,64s192,86.131,192,192S361.869,448,256,448z"
                        />
                        <path
                          class="st0"
                          d="M372.432,186c0.084-0.125,0.184-0.238,0.268-0.363c-6.652,2.949-13.713,5.098-21.066,6.436
		c-1.754,0.264-3.52,0.49-5.305,0.627c7.502-4.594,13.53-11.281,17.44-19.215c1.029-1.973,2.025-3.967,2.785-6.062
		c-0.088,0.053-0.184,0.094-0.272,0.146c0.039-0.123,0.11-0.23,0.148-0.354c-8.992,5.332-18.953,9.207-29.556,11.295
		c-8.49-9.047-20.588-14.699-33.975-14.699c-25.709,0-46.549,20.84-46.549,46.545c0,3.348,0.387,6.602,1.057,9.75
		c0.041,0.287,0.064,0.564,0.105,0.853c-34.021-1.717-64.633-16.283-87.131-38.932c-2.988-3.051-5.871-6.219-8.56-9.578
		c-0.014,0.024-0.022,0.047-0.035,0.07c-0.055-0.066-0.117-0.123-0.172-0.19c-4.006,6.875-6.301,14.869-6.301,23.4
		c0,13.328,5.652,25.305,14.631,33.795c1.783,1.756,3.67,3.424,5.734,4.918c-7.502-0.295-14.56-2.357-20.742-5.791
		c-0.002,0.195-0.004,0.389-0.004,0.586c0,18.754,11.174,34.791,27.158,42.164c3.098,1.49,6.324,2.754,9.771,3.558
		c-3.787,0.994-7.754,1.551-11.853,1.551c-2.649,0-5.209-0.31-7.734-0.738c-0.258-0.072-0.543-0.09-0.795-0.172
		c0.012,0.035,0.03,0.066,0.041,0.1c-0.088-0.016-0.184-0.01-0.27-0.026c5.184,16.188,19.004,28.516,36.029,31.59
		c2.365,0.473,4.787,0.766,7.252,0.881c-15.9,12.393-35.89,19.781-57.609,19.781c-3.02,0-5.979-0.244-8.926-0.523
		c-0.68-0.121-1.385-0.166-2.049-0.33c0.129,0.082,0.266,0.152,0.394,0.234c-0.172-0.019-0.351-0.012-0.521-0.031
		c20.598,13.207,45.064,20.912,71.352,20.912c47.303,0,82.695-21.694,104.959-51.446c0.074-0.098,0.156-0.189,0.228-0.287
		c2.129-2.86,4.088-5.809,5.971-8.805c0.387-0.611,0.816-1.195,1.192-1.812c1.736-2.862,3.303-5.795,4.818-8.752
		c0.377-0.736,0.806-1.447,1.17-2.192c1.764-3.6,3.354-7.258,4.789-10.959c0.018-0.043,0.037-0.086,0.055-0.129
		c6.084-15.73,9.254-32.197,9.254-48.054c0-2.02-0.045-4.026-0.135-6.022c7.234-5.223,13.664-11.514,19.152-18.553
		c1.428-1.744,2.842-3.5,4.17-5.324C372.676,185.908,372.551,185.949,372.432,186z"
                        />
                      </g>
                    </svg>
                  </span>
                ) : null
              )}
              {socials.map((item) =>
                item.name === "pintrest" && item.url && _.size(item.url) > 0 ? (
                  <span>
                    <svg
                      width="40px"
                      height="auto"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.9716 20.5 9.98587 20.3174 9.07345 19.9828C9.64822 18.4359 10.2115 16.8847 10.7517 15.3255C11.326 15.7348 12.0668 16 13 16C14.935 16 16.9749 14.7247 17.4806 12.1961C18.1155 9.02148 15.5728 6 12 6C10.4972 6 9.01887 6.6037 7.91298 7.56243C6.80483 8.52311 6 9.90687 6 11.5C6 12.2746 6.23394 13.1378 6.79149 13.7057C7.17707 14.0919 7.82087 14.0933 8.20711 13.7071C8.59019 13.324 8.59749 12.7074 8.22899 12.3155C7.44315 11.3348 8.47852 9.71907 9.22306 9.07361C9.99585 8.40366 11.0175 8 12 8C14.4272 8 15.8845 9.97852 15.5194 11.8039C15.2165 13.3183 14.065 14 13 14C12.1821 14 11.7416 13.6547 11.4599 13.208C11.6137 12.7237 11.7454 12.2838 11.8387 11.9263C12.0311 11.1886 12.1473 10.3002 11.4839 9.7474C10.9908 9.33644 10.4087 9.42759 10.0528 9.60557C9.39135 9.93629 9 10.7099 9 11.5C9 11.9414 9.06873 12.6253 9.31675 13.3315C8.67824 15.258 7.98579 17.167 7.27924 19.0696C5.00045 17.5449 3.5 14.9477 3.5 12ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5Z"
                        fill="#ffffff"
                        className="hover:fill-red-600 transition-all duration-300"
                      />
                    </svg>
                  </span>
                ) : null
              )}
              {socials.map((item) =>
                item.name === "instagram" &&
                item.url &&
                _.size(item.url) > 0 ? (
                  <span>
                    <svg
                      fill="#ffffff"
                      width="35px"
                      height="auto"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                      className="hover:fill-purple-600 transition-all duration-300"
                    >
                      <g>
                        <path
                          d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7
		c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4
		c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8
		c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4
		c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                        />
                        <path
                          d="M191.6,273h-157c-27.3,0-49.5,22.2-49.5,49.5v52.3v104.8c0,27.3,22.2,49.5,49.5,49.5h157c27.3,0,49.5-22.2,49.5-49.5V374.7
		v-52.3C241,295.2,218.8,273,191.6,273z M205.8,302.5h5.7v5.6v37.8l-43.3,0.1l-0.1-43.4L205.8,302.5z M76.5,374.7
		c8.2-11.3,21.5-18.8,36.5-18.8s28.3,7.4,36.5,18.8c5.4,7.4,8.5,16.5,8.5,26.3c0,24.8-20.2,45.1-45.1,45.1C88,446.1,68,425.8,68,401
		C68,391.2,71.2,382.1,76.5,374.7z M216.1,479.5c0,13.5-11,24.5-24.5,24.5h-157c-13.5,0-24.5-11-24.5-24.5V374.7h38.2
		c-3.3,8.1-5.2,17-5.2,26.3c0,38.6,31.4,70,70,70c38.6,0,70-31.4,70-70c0-9.3-1.9-18.2-5.2-26.3h38.2V479.5z"
                        />
                      </g>
                    </svg>
                  </span>
                ) : null
              )}
              {socials.map((item) =>
                item.name === "youtube" && item.url && _.size(item.url) > 0 ? (
                  <span>
                    <svg
                      fill="#ffffff"
                      width="35px"
                      height="auto"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-143 145 512 512"
                      className="hover:fill-red-600 transition-all duration-300"
                    >
                      <g>
                        <path
                          d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7
		c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4
		c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8
		c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4
		c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"
                        />
                        <path
                          d="M196.9,311.2H29.1c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5
		C241,355.3,241,311.2,196.9,311.2z M78.9,450.3v-98.5l83.8,49.3L78.9,450.3z"
                        />
                      </g>
                    </svg>
                  </span>
                ) : null
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex-1 flex items-center justify-between mx-2">
        <span className="uppercase  font-bold text-lg">Payment</span>
        <div className="flex gap-3">
          <div>
            <svg
              width="60px"
              height="auto"
              viewBox="0 -139.5 750 750"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="mastercard" fill-rule="nonzero">
                  <rect
                    id="Rectangle-1"
                    fill="#ddd"
                    x="0"
                    y="0"
                    width="750"
                    height="471"
                    rx="40"
                  ></rect>
                  <path
                    d="M434.008334,235.5 C434.008334,334.641668 353.6375,415.004169 254.499999,415.004169 C155.362498,415.004169 74.9999973,334.641668 74.9999973,235.5 C74.9999973,136.366666 155.362498,55.9958324 254.499999,55.9958324 C353.6375,55.9958324 434.008334,136.366666 434.008334,235.5"
                    id="Fill-1"
                    fill="#000000"
                  ></path>
                  <path
                    d="M495.491667,55.9958324 C449.1125,55.9958324 406.85,73.5916658 374.991666,102.462499 C368.504166,108.345833 362.445833,114.7 356.866666,121.458333 L393.133333,121.458333 C398.091667,127.4875 402.658333,133.829166 406.816667,140.470833 L343.183333,140.470833 C339.370833,146.575 335.908333,152.916666 332.841666,159.479167 L417.154167,159.479167 C420.033333,165.6375 422.575,171.975 424.754167,178.483333 L325.241666,178.483333 C323.166666,184.675 321.420833,191.0125 320.024999,197.491667 L429.966667,197.491667 C432.604167,209.741667 434.008334,222.458334 434.008334,235.5 C434.008334,255.433334 430.754167,274.612501 424.754167,292.520834 L325.241666,292.520834 C327.416666,299.033334 329.958333,305.375001 332.837499,311.529168 L417.154167,311.529168 C414.079167,318.091668 410.625,324.433335 406.808333,330.541668 L343.183333,330.541668 C347.3375,337.170835 351.9125,343.520835 356.866666,349.537501 L393.125,349.537501 C387.554167,356.308335 381.491666,362.670835 374.995833,368.550002 C406.854167,397.416668 449.1125,415.004169 495.491667,415.004169 C594.629168,415.004169 675.000002,334.641668 675.000002,235.5 C675.000002,136.370833 594.629168,55.9958324 495.491667,55.9958324"
                    id="Fill-2"
                    fill="#555"
                  ></path>
                  <path
                    d="M651.075002,335.558335 C651.075002,332.358335 653.666669,329.758335 656.870835,329.758335 C660.075002,329.758335 662.666669,332.358335 662.666669,335.558335 C662.666669,338.758335 660.075002,341.358335 656.870835,341.358335 C653.666669,341.358335 651.075002,338.758335 651.075002,335.558335 Z M656.870835,339.966668 C659.304169,339.966668 661.279169,337.991668 661.279169,335.558335 C661.279169,333.120835 659.304169,331.154168 656.870835,331.154168 C654.433335,331.154168 652.466669,333.120835 652.466669,335.558335 C652.466669,337.991668 654.433335,339.966668 656.870835,339.966668 Z M656.087502,338.108335 L654.900002,338.108335 L654.900002,333.012501 L657.050002,333.012501 C657.500002,333.012501 657.958335,333.012501 658.354169,333.266668 C658.766669,333.545835 659.000002,334.037501 659.000002,334.545835 C659.000002,335.116668 658.662502,335.650001 658.116669,335.858335 L659.054169,338.108335 L657.737502,338.108335 L656.958335,336.091668 L656.087502,336.091668 L656.087502,338.108335 Z M656.087502,335.216668 L656.745835,335.216668 C656.991669,335.216668 657.250002,335.237501 657.470835,335.116668 C657.666669,334.991668 657.766669,334.758335 657.766669,334.533335 C657.766669,334.337501 657.645835,334.112501 657.479169,334.016668 C657.270835,333.887501 656.941669,333.916668 656.720835,333.916668 L656.087502,333.916668 L656.087502,335.216668 Z"
                    id="Fill-3"
                    fill="#000000"
                  ></path>
                  <path
                    d="M212.587498,255.154167 C210.541665,254.916667 209.641665,254.854167 208.237498,254.854167 C197.191665,254.854167 191.599998,258.641667 191.599998,266.120834 C191.599998,270.733334 194.329165,273.666667 198.587498,273.666667 C206.524998,273.666667 212.245832,266.108334 212.587498,255.154167 Z M226.758332,288.150001 L210.612498,288.150001 L210.983332,280.475001 C206.058332,286.541668 199.487498,289.425001 190.558332,289.425001 C179.995832,289.425001 172.754165,281.175001 172.754165,269.195834 C172.754165,251.170834 185.349998,240.654167 206.970832,240.654167 C209.179165,240.654167 212.012498,240.854167 214.912498,241.225001 C215.516665,238.783334 215.674998,237.7375 215.674998,236.425 C215.674998,231.516667 212.279165,229.6875 203.174998,229.6875 C193.641665,229.579167 185.779165,231.958334 182.549998,233.020834 C182.754165,231.791667 185.249998,216.3625 185.249998,216.3625 C194.962498,213.516667 201.366665,212.445834 208.574998,212.445834 C225.308332,212.445834 234.170832,219.958334 234.154165,234.158334 C234.187499,237.9625 233.558332,242.658334 232.574999,248.829167 C230.883332,259.558334 227.254165,282.545834 226.758332,288.150001 Z"
                    id="Fill-4"
                    fill="#000000"
                  ></path>
                  <polyline
                    id="Fill-5"
                    fill="#000000"
                    points="164.599998 288.150001 145.112498 288.150001 156.274998 218.154167 131.349998 288.150001 118.070831 288.150001 116.429164 218.554167 104.695831 288.150001 86.4541641 288.150001 101.691664 197.095833 129.712498 197.095833 131.412498 248.062501 148.504165 197.095833 179.670832 197.095833 164.599998 288.150001"
                  ></polyline>
                  <path
                    d="M519.575001,255.154167 C517.537501,254.916667 516.633334,254.854167 515.233334,254.854167 C504.191667,254.854167 498.600001,258.641667 498.600001,266.120834 C498.600001,270.733334 501.325001,273.666667 505.583334,273.666667 C513.520834,273.666667 519.245834,266.108334 519.575001,255.154167 Z M533.758334,288.150001 L517.612501,288.150001 L517.979168,280.475001 C513.054168,286.541668 506.479167,289.425001 497.558334,289.425001 C486.991667,289.425001 479.758334,281.175001 479.758334,269.195834 C479.758334,251.170834 492.345834,240.654167 513.970834,240.654167 C516.179168,240.654167 519.008334,240.854167 521.904168,241.225001 C522.508334,238.783334 522.666668,237.7375 522.666668,236.425 C522.666668,231.516667 519.275001,229.6875 510.170834,229.6875 C500.637501,229.579167 492.783334,231.958334 489.541667,233.020834 C489.745834,231.791667 492.250001,216.3625 492.250001,216.3625 C501.962501,213.516667 508.362501,212.445834 515.562501,212.445834 C532.304168,212.445834 541.166668,219.958334 541.150001,234.158334 C541.183334,237.9625 540.554168,242.658334 539.570834,248.829167 C537.887501,259.558334 534.250001,282.545834 533.758334,288.150001 Z"
                    id="Fill-6"
                    fill="#000000"
                  ></path>
                  <path
                    d="M313.366666,287.025001 C308.033333,288.704168 303.874999,289.425001 299.366666,289.425001 C289.404166,289.425001 283.966666,283.700001 283.966666,273.158334 C283.824999,269.887501 285.399999,261.279167 286.637499,253.420834 C287.762499,246.504167 295.087499,202.891667 295.087499,202.891667 L314.458333,202.891667 L312.195833,214.1 L323.895833,214.1 L321.254166,231.895834 L309.512499,231.895834 C307.262499,245.979167 304.058333,263.520834 304.020833,265.845834 C304.020833,269.662501 306.058333,271.329167 310.691666,271.329167 C312.912499,271.329167 314.633333,271.104167 315.945833,270.629167 L313.366666,287.025001"
                    id="Fill-7"
                    fill="#000000"
                  ></path>
                  <path
                    d="M372.758333,286.425001 C366.104166,288.458334 359.683333,289.441668 352.879166,289.425001 C331.195833,289.404168 319.891666,278.079167 319.891666,256.391667 C319.891666,231.079167 334.270833,212.445834 353.791666,212.445834 C369.7625,212.445834 379.9625,222.879167 379.9625,239.241667 C379.9625,244.670834 379.2625,249.970834 377.575,257.454167 L338.999999,257.454167 C337.695833,268.195834 344.570833,272.670834 355.8375,272.670834 C362.770833,272.670834 369.025,271.241667 375.979166,268.008334 L372.758333,286.425001 Z M361.870833,242.525001 C361.979166,240.983334 363.925,229.308334 352.858333,229.308334 C346.6875,229.308334 342.274999,234.0125 340.479166,242.525001 L361.870833,242.525001 Z"
                    id="Fill-8"
                    fill="#000000"
                  ></path>
                  <path
                    d="M238.445832,237.508334 C238.445832,246.875001 242.987499,253.333334 253.287499,258.183334 C261.179166,261.891667 262.399999,262.991667 262.399999,266.354167 C262.399999,270.970834 258.920832,273.054167 251.208332,273.054167 C245.395832,273.054167 239.987499,272.145834 233.749999,270.133334 C233.749999,270.133334 231.187499,286.454168 231.070832,287.233334 C235.499999,288.200001 239.449999,289.095834 251.349999,289.425001 C271.912499,289.425001 281.408332,281.595834 281.408332,264.675001 C281.408332,254.500001 277.433332,248.529167 267.670832,244.041667 C259.499999,240.291667 258.562499,239.454167 258.562499,235.995834 C258.562499,231.991667 261.799999,229.95 268.099999,229.95 C271.924999,229.95 277.149999,230.358334 282.099999,231.0625 L284.874999,213.8875 C279.829166,213.0875 272.179166,212.445834 267.724999,212.445834 C245.924999,212.445834 238.379165,223.833334 238.445832,237.508334"
                    id="Fill-9"
                    fill="#000000"
                  ></path>
                  <path
                    d="M467.533334,214.391667 C472.945834,214.391667 477.991667,215.8125 484.945834,219.3125 L488.133334,199.55 C485.279167,198.429167 475.229167,191.85 466.716667,191.85 C453.675,191.85 442.65,198.320834 434.895834,209 C423.5875,205.254167 418.9375,212.825 413.2375,220.366667 L408.175,221.545834 C408.558333,219.0625 408.904167,216.595834 408.7875,214.1 L390.891667,214.1 C388.445833,237.016667 384.1125,260.229167 380.720833,283.175001 L379.8375,288.150001 L399.333333,288.150001 C402.5875,267.008334 404.370833,253.470834 405.454167,244.308334 L412.795833,240.225001 C413.891667,236.145834 417.325,234.766667 424.2125,234.933334 C423.3125,239.766667 422.829167,244.850001 422.829167,250.116667 C422.829167,274.341667 435.9,289.425001 456.879167,289.425001 C462.283334,289.425001 466.920834,288.712501 474.100001,286.766668 L477.529167,266.008334 C471.070834,269.187501 465.770834,270.683334 460.970834,270.683334 C449.641667,270.683334 442.7875,262.320834 442.7875,248.500001 C442.7875,228.45 452.983334,214.391667 467.533334,214.391667"
                    id="Fill-10"
                    fill="#000000"
                  ></path>
                  <polyline
                    id="Fill-12"
                    fill="#FFFFFF"
                    points="170.208331 282.741668 150.716665 282.741668 161.887498 212.754167 136.962498 282.741668 123.679164 282.741668 122.037498 213.154167 110.304164 282.741668 92.0624975 282.741668 107.299998 191.7 135.320831 191.7 136.108331 248.062501 155.012498 191.7 185.279165 191.7 170.208331 282.741668"
                  ></polyline>
                  <path
                    d="M632.520835,197.095833 L628.200002,223.404167 C622.870835,216.391667 617.145835,211.316667 609.587502,211.316667 C599.754168,211.316667 590.804168,218.770834 584.945835,229.741667 C576.787501,228.05 568.350001,225.179167 568.350001,225.179167 L568.345835,225.245834 C569.004168,219.1125 569.266668,215.370834 569.208335,214.1 L551.308334,214.1 C548.870834,237.016667 544.537501,260.229167 541.150001,283.175001 L540.258334,288.150001 L559.750001,288.150001 C562.383335,271.054167 564.400001,256.858334 565.883335,245.600001 C572.541668,239.583334 575.875001,234.333334 582.604168,234.683334 C579.625001,241.887501 577.879168,250.187501 577.879168,258.700001 C577.879168,277.212501 587.245835,289.425001 601.412502,289.425001 C608.554168,289.425001 614.033335,286.962501 619.379168,281.254168 L618.466668,288.137501 L636.900002,288.137501 L651.741669,197.095833 L632.520835,197.095833 Z M608.150002,271.037501 C601.516668,271.037501 598.166668,266.129167 598.166668,256.441667 C598.166668,241.887501 604.437502,231.566667 613.279168,231.566667 C619.975002,231.566667 623.600002,236.670834 623.600002,246.075001 C623.600002,260.754167 617.229168,271.037501 608.150002,271.037501 Z"
                    id="Fill-11"
                    fill="#000000"
                  ></path>
                  <path
                    d="M218.191665,249.758334 C216.149998,249.520834 215.245832,249.458334 213.845832,249.458334 C202.799998,249.458334 197.212498,253.245834 197.212498,260.725001 C197.212498,265.329167 199.941665,268.270834 204.191665,268.270834 C212.137498,268.270834 217.858332,260.712501 218.191665,249.758334 Z M232.370832,282.741668 L216.224998,282.741668 L216.591665,275.079167 C211.670832,281.133334 205.091665,284.029168 196.170832,284.029168 C185.604165,284.029168 178.366665,275.779167 178.366665,263.800001 C178.366665,245.766667 190.958332,235.258334 212.583332,235.258334 C214.791665,235.258334 217.624998,235.458334 220.520832,235.829167 C221.124999,233.3875 221.283332,232.341667 221.283332,231.020834 C221.283332,226.1125 217.891665,224.291667 208.787498,224.291667 C199.249998,224.183334 191.391665,226.5625 188.158332,227.6125 C188.362498,226.3875 190.858332,210.975 190.858332,210.975 C200.566665,208.116667 206.979165,207.045834 214.179165,207.045834 C230.916665,207.045834 239.783332,214.5625 239.766665,228.75 C239.795832,232.570834 239.162499,237.2625 238.183332,243.425001 C236.495832,254.150001 232.862499,277.150001 232.370832,282.741668 Z"
                    id="Fill-13"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M493.745834,194.15 L490.554167,213.916667 C483.604167,210.420834 478.554167,208.995834 473.145834,208.995834 C458.595834,208.995834 448.395834,223.054167 448.395834,243.104167 C448.395834,256.925001 455.254167,265.283334 466.579167,265.283334 C471.379167,265.283334 476.675001,263.791667 483.133334,260.608334 L479.712501,281.358334 C472.529167,283.316668 467.895834,284.029168 462.4875,284.029168 C441.5125,284.029168 428.4375,268.945834 428.4375,244.720834 C428.4375,212.170834 446.495834,189.420833 472.325001,189.420833 C480.833334,189.420833 490.887501,193.029167 493.745834,194.15"
                    id="Fill-14"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M525.187501,249.758334 C523.145834,249.520834 522.245834,249.458334 520.841668,249.458334 C509.800001,249.458334 504.208334,253.245834 504.208334,260.725001 C504.208334,265.329167 506.937501,268.270834 511.191668,268.270834 C519.129168,268.270834 524.854168,260.712501 525.187501,249.758334 Z M539.366668,282.741668 L523.216668,282.741668 L523.587501,275.079167 C518.662501,281.133334 512.087501,284.029168 503.166667,284.029168 C492.604167,284.029168 485.362501,275.779167 485.362501,263.800001 C485.362501,245.766667 497.958334,235.258334 519.575001,235.258334 C521.787501,235.258334 524.616668,235.458334 527.516668,235.829167 C528.116668,233.3875 528.279168,232.341667 528.279168,231.020834 C528.279168,226.1125 524.887501,224.291667 515.783334,224.291667 C506.250001,224.183334 498.387501,226.5625 495.154167,227.6125 C495.358334,226.3875 497.858334,210.975 497.858334,210.975 C507.566667,208.116667 513.975001,207.045834 521.175001,207.045834 C537.916668,207.045834 546.779168,214.5625 546.758334,228.75 C546.791668,232.570834 546.162501,237.2625 545.179168,243.425001 C543.495834,254.150001 539.854168,277.150001 539.366668,282.741668 Z"
                    id="Fill-15"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M318.974999,281.620834 C313.637499,283.300001 309.479166,284.029168 304.974999,284.029168 C295.012499,284.029168 289.574999,278.304167 289.574999,267.762501 C289.437499,264.483334 291.012499,255.883334 292.249999,248.025001 C293.370832,241.100001 300.695832,197.491667 300.695832,197.491667 L320.062499,197.491667 L317.804166,208.704167 L327.745833,208.704167 L325.099999,226.491667 L315.124999,226.491667 C312.874999,240.583334 309.662499,258.112501 309.629166,260.441667 C309.629166,264.270834 311.670833,265.925001 316.299999,265.925001 C318.520833,265.925001 320.237499,265.708334 321.554166,265.233334 L318.974999,281.620834"
                    id="Fill-16"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M378.366666,281.029167 C371.716666,283.062501 365.2875,284.041668 358.4875,284.029168 C336.804166,284.008334 325.499999,272.683334 325.499999,250.995834 C325.499999,225.675 339.879166,207.045834 359.4,207.045834 C375.370833,207.045834 385.570833,217.475 385.570833,233.845834 C385.570833,239.279167 384.870833,244.579167 383.1875,252.058334 L344.6125,252.058334 C343.308333,262.800001 350.183333,267.279167 361.45,267.279167 C368.379166,267.279167 374.6375,265.845834 381.5875,262.604167 L378.366666,281.029167 Z M367.475,237.116667 C367.591666,235.579167 369.533333,223.9 358.4625,223.9 C352.295833,223.9 347.883333,228.616667 346.0875,237.116667 L367.475,237.116667 Z"
                    id="Fill-17"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M244.054165,232.1125 C244.054165,241.479167 248.595832,247.929167 258.895832,252.787501 C266.787499,256.495834 268.008332,257.600001 268.008332,260.958334 C268.008332,265.575001 264.524999,267.658334 256.820832,267.658334 C251.004165,267.658334 245.595832,266.750001 239.354165,264.737501 C239.354165,264.737501 236.799999,281.058334 236.683332,281.837501 C241.104165,282.804168 245.058332,283.687501 256.958332,284.029168 C277.524999,284.029168 287.016666,276.200001 287.016666,259.283334 C287.016666,249.104167 283.045832,243.133334 273.279166,238.645834 C265.112499,234.8875 264.166666,234.0625 264.166666,230.6 C264.166666,226.6 267.412499,224.541667 273.708332,224.541667 C277.529166,224.541667 282.754166,224.9625 287.712499,225.666667 L290.483332,208.4875 C285.441666,207.6875 277.791666,207.045834 273.337499,207.045834 C251.533332,207.045834 243.991665,218.425 244.054165,232.1125"
                    id="Fill-18"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M642.508335,282.741668 L624.070835,282.741668 L624.987502,275.850001 C619.641668,281.566668 614.162502,284.029168 607.020835,284.029168 C592.854168,284.029168 583.491668,271.816667 583.491668,253.304167 C583.491668,228.675 598.012502,207.9125 615.200002,207.9125 C622.758335,207.9125 628.479168,211 633.804168,218.008334 L638.129169,191.7 L657.350002,191.7 L642.508335,282.741668 Z M613.762502,265.633334 C622.837502,265.633334 629.212502,255.350001 629.212502,240.679167 C629.212502,231.275 625.583335,226.170834 618.887502,226.170834 C610.050002,226.170834 603.770835,236.4875 603.770835,251.045834 C603.770835,260.733334 607.129168,265.633334 613.762502,265.633334 Z"
                    id="Fill-19"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M556.920835,208.704167 C554.479168,231.620834 550.145834,254.833334 546.758334,277.766667 L545.866668,282.741668 L565.358335,282.741668 C572.329168,237.466667 574.016668,228.625 584.945835,229.733334 C586.687501,220.466667 589.929168,212.35 592.345835,208.254167 C584.183335,206.554167 579.625001,211.166667 573.658335,219.929167 C574.129168,216.141667 574.991668,212.4625 574.820835,208.704167 L556.920835,208.704167"
                    id="Fill-20"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M396.5,208.704167 C394.054167,231.620834 389.720833,254.833334 386.333333,277.766667 L385.445833,282.741668 L404.945833,282.741668 C411.908333,237.466667 413.591667,228.625 424.516667,229.733334 C426.266667,220.466667 429.508334,212.35 431.916667,208.254167 C423.7625,206.554167 419.2,211.166667 413.2375,219.929167 C413.708333,216.141667 414.5625,212.4625 414.4,208.704167 L396.5,208.704167"
                    id="Fill-21"
                    fill="#FFFFFF"
                  ></path>
                  <path
                    d="M651.066669,276.945834 C651.066669,273.733334 653.662502,271.145834 656.862502,271.145834 C660.066669,271.145834 662.658335,273.733334 662.658335,276.945834 C662.658335,280.141667 660.066669,282.741668 656.862502,282.741668 C653.662502,282.741668 651.066669,280.141667 651.066669,276.945834 Z M656.862502,281.350001 C659.300002,281.350001 661.266669,279.375001 661.266669,276.945834 C661.266669,274.512501 659.300002,272.537501 656.862502,272.537501 C654.429169,272.537501 652.454169,274.512501 652.454169,276.945834 C652.454169,279.375001 654.429169,281.350001 656.862502,281.350001 Z M656.079169,279.479167 L654.891669,279.479167 L654.891669,274.395834 L657.045835,274.395834 C657.491669,274.395834 657.954169,274.404167 658.341669,274.650001 C658.758335,274.933334 658.995835,275.416667 658.995835,275.925001 C658.995835,276.500001 658.658335,277.037501 658.108335,277.241667 L659.050002,279.479167 L657.729169,279.479167 L656.950002,277.470834 L656.079169,277.470834 L656.079169,279.479167 Z M656.079169,276.600001 L656.733335,276.600001 C656.979169,276.600001 657.245835,276.616667 657.462502,276.500001 C657.658335,276.375001 657.758335,276.137501 657.758335,275.912501 C657.758335,275.725001 657.641669,275.500001 657.470835,275.387501 C657.266669,275.270834 656.929169,275.304167 656.708335,275.304167 L656.079169,275.304167 L656.079169,276.600001 Z"
                    id="Fill-22"
                    fill="#FFFFFF"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div>
            <svg
              width="65px"
              height="auto"
              viewBox="0 -140 780 780"
              enable-background="new 0 0 780 500"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M53.487,14h673.524c21.257,0,38.488,16.816,38.488,37.559v394.38   c0,20.744-17.231,37.561-38.488,37.561H53.487C32.231,483.5,15,466.684,15,445.939V51.559C15,30.816,32.231,14,53.487,14z"
                // fill="#888"
                stroke="#393939"
                stroke-width="30"
              />
              <path
                d="m296.86 342.7l32.099-183.82h51.344l-32.123 183.82h-51.32zm236.8-179.86c-10.172-3.724-26.108-7.721-46.014-7.721-50.731 0-86.466 24.931-86.77 60.662-0.287 26.414 25.511 41.149 44.984 49.941 19.985 9.01 26.703 14.755 26.608 22.801-0.127 12.322-15.96 17.952-30.715 17.952-20.549 0-31.467-2.786-48.327-9.65l-6.616-2.921-7.207 41.149c11.993 5.132 34.168 9.578 57.191 9.808 53.967 0 89.002-24.646 89.401-62.801 0.193-20.912-13.484-36.826-43.105-49.945-17.945-8.502-28.936-14.178-28.818-22.788 0-7.64 9.301-15.812 29.399-15.812 16.791-0.254 28.951 3.319 38.427 7.043l4.601 2.122 6.96-39.843m132.12-3.963h-39.671c-12.29 0-21.487 3.274-26.886 15.245l-76.245 168.46h53.91s8.815-22.653 10.81-27.625c5.892 0 58.264 0.079 65.752 0.079 1.535 6.436 6.245 27.546 6.245 27.546h47.641l-41.556-183.71zm-62.943 118.7c4.246-10.591 20.455-51.385 20.455-51.385-0.303 0.491 4.215-10.643 6.81-17.543l3.468 15.849s9.831 43.878 11.886 53.079h-42.619zm-349.55-118.7l-50.264 125.35-5.356-25.476c-9.357-29.366-38.511-61.182-71.103-77.11l45.959 160.76 54.32-0.061 80.827-183.47h-54.383"
                fill="#ddd"
              />
              <path
                d="m156.11 158.88h-82.787l-0.655 3.825c64.406 15.216 107.02 51.984 124.72 96.166l-18.002-84.473c-3.108-11.638-12.121-15.111-23.272-15.518"
                fill="#393939"
              />
            </svg>
          </div>
          <div>
            <svg
              width="60px"
              height="auto"
              viewBox="0 -9 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="57"
                height="39"
                rx="3.5"
                fill="white"
                stroke="#F3F3F3"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0689 20.3224C19.0689 22.7645 20.9865 24.658 23.4543 24.658C24.1518 24.658 24.7494 24.5209 25.4861 24.1739V22.2663C24.8384 22.9147 24.2644 23.1763 23.5297 23.1763C21.8975 23.1763 20.739 21.9928 20.739 20.3102C20.739 18.7152 21.9341 17.4569 23.4543 17.4569C24.2272 17.4569 24.8124 17.7327 25.4861 18.3916V16.485C24.7748 16.1242 24.19 15.9746 23.4925 15.9746C21.0372 15.9746 19.0689 17.9066 19.0689 20.3224ZM14.91 18.3046C14.91 18.7536 15.1954 18.9908 16.168 19.3507C18.0114 20.0251 18.5577 20.6224 18.5577 21.9426C18.5577 23.5508 17.3762 24.6707 15.6923 24.6707C14.459 24.6707 13.5622 24.1851 12.8156 23.0889L13.8626 22.0807C14.2356 22.8022 14.8583 23.189 15.6313 23.189C16.3545 23.189 16.8896 22.6902 16.8896 22.0171C16.8896 21.6682 16.7275 21.3687 16.4036 21.1572C16.2408 21.057 15.9179 20.9081 15.2833 20.684C13.7612 20.1364 13.2393 19.5503 13.2393 18.4057C13.2393 17.046 14.3605 16.0252 15.8306 16.0252C16.7416 16.0252 17.5752 16.3366 18.272 16.9461L17.424 18.0564C17.0019 17.5833 16.6026 17.3836 16.1173 17.3836C15.4188 17.3836 14.91 17.7814 14.91 18.3046ZM10.5846 24.4709H12.2053V16.1625H10.5846V24.4709ZM7.27202 22.4038C6.76294 22.8638 6.10138 23.0644 5.05432 23.0644H4.61938V17.57H5.05432C6.10138 17.57 6.73694 17.7575 7.27202 18.2422C7.83247 18.741 8.16951 19.5146 8.16951 20.3103C8.16951 21.108 7.83247 21.905 7.27202 22.4038ZM5.37884 16.1625H3V24.4706H5.36632C6.62459 24.4706 7.53299 24.174 8.33064 23.5115C9.27852 22.7274 9.83896 21.5452 9.83896 20.3225C9.83896 17.8705 8.00709 16.1625 5.37884 16.1625ZM36.1203 16.1625L38.3357 21.7432L40.5801 16.1625H42.3368L38.7476 24.6841H37.8754L34.3497 16.1625H36.1203ZM43.0697 24.4708H47.6656V23.0642H44.689V20.8215H47.5561V19.4142H44.689V17.5702H47.6656V16.1623H43.0697V24.4708ZM50.3576 19.9874H50.831C51.8662 19.9874 52.4148 19.5377 52.4148 18.7025C52.4148 17.894 51.8662 17.4712 50.8567 17.4712H50.3576V19.9874ZM51.1421 16.1622C53.0109 16.1622 54.0823 17.0597 54.0823 18.6152C54.0823 19.8873 53.4102 20.7225 52.1895 20.9706L54.8052 24.4707H52.8122L50.5691 21.133H50.3576V24.4707H48.7388V16.1622H51.1421Z"
                fill="#1D1D1B"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.1585 22.7268C35.4738 20.67 34.8731 17.9376 32.8166 16.6224V16.6224C30.76 15.3072 28.0271 15.9076 26.7117 17.9644V17.9644C25.3967 20.0206 25.9977 22.7539 28.0542 24.0691V24.0691C30.1107 25.3843 32.8434 24.783 34.1585 22.7268Z"
                fill="url(#paint0_linear_545_4255)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_545_4255"
                  x1="36.5397"
                  y1="19.0034"
                  x2="29.0929"
                  y2="14.241"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#F6A000" />
                  <stop offset="0.623918" stop-color="#E47E02" />
                  <stop offset="1" stop-color="#D36002" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex-1">playstore</div>
    </div>
  );
};
