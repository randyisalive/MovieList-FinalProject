import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import UseMyListData from "../../functionComponent/mylist/UseMyListData";

function ProfileStatistics() {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});
  const { GetCountData } = UseMyListData();
  const count = GetCountData();
  useEffect(() => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ["Watching", "Completed", "Dropped", "Plan to Watch"],
      datasets: [
        {
          data: count,
          backgroundColor: [
            documentStyle.getPropertyValue("--blue-500"),
            documentStyle.getPropertyValue("--yellow-500"),
            documentStyle.getPropertyValue("--black-500"),
            documentStyle.getPropertyValue("--green-500"),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue("--blue-400"),
            documentStyle.getPropertyValue("--yellow-400"),
            documentStyle.getPropertyValue("--black-400"),
            documentStyle.getPropertyValue("--green-400"),
          ],
        },
      ],
    };
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };

    setChartData(data);
    setChartOptions(options);
  }, [count]);
  return (
    <>
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <div className="d-flex flex-column gap-2">
              <div
                className="d-flex border-bottom"
                style={{ justifyContent: "space-between" }}
              >
                <p className="h6"> Movie Stats</p>
                <p>All Movie Stats</p>
              </div>
              <div
                id="bar-chart-container"
                className="d-flex flex-column gap-2 "
              >
                <p className="m-0">Mean Score: {"7.70"}</p>
                <div className="d-flex justify-content-center">
                  <Chart
                    type="pie"
                    data={chartData}
                    options={{
                      ...chartOptions,
                      maintainAspectRatio: false, // This allows you to set both width and height
                      width: 300, // Set the desired width of the chart
                      height: 300, // Set the desired height of the chart
                    }}
                    className="w-full md:w-30rem"
                  />
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default ProfileStatistics;
