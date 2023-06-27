import USER_ACTIVITY from "../mock/dataActivityMock";
import USER_AVERAGE_SESSIONS from "../mock/dataAverageMock";
import USER_MAIN_DATA from "../mock/dataMock";
import USER_PERFORMANCE from "../mock/dataPerfMock";
const baseURL = "http://localhost:3000/user/";

export const getUserInfos = async (id) => {
  return await fetch(baseURL + id)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((info) => {
      return info.data;
    })
    .catch((error) => {
      console.log("Runing mock data file...")
      if (id === "12") {
        const res = USER_MAIN_DATA[0];
        const dataToUse = [res].map((datas) => {
          return {
            mock: true,
            id: datas.id,
            keyData: datas.keyData,
            todayScore: datas.todayScore,
            userInfos: datas.userInfos,
          };
        });
        return dataToUse[0];
      } else if (id === "18") {
        const res = USER_MAIN_DATA[1];
        const dataToUse = [res].map((datas) => {
          return {
            mock: true,
            id: datas.id,
            keyData: datas.keyData,
            todayScore: datas.todayScore,
            userInfos: datas.userInfos,
          };
        });
        return dataToUse[0];
      }
    });
};

export const getUserActivity = async (id) => {
  return await fetch(baseURL + id + "/activity")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((info) => {
      return info.data;
    })
    .catch((error) => {
      if (id === "12") {
        const res = USER_ACTIVITY[0];
        return res;
      } else if (id === "18") {
        const res = USER_ACTIVITY[1];
        return res;
      }
    });
};

export const getUserAverage = async (id) => {
  return await fetch(baseURL + id + "/average-sessions")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((info) => {
      return info.data;
    })
    .catch((error) => {
      if (id === "12") {
        const res = USER_AVERAGE_SESSIONS[0];
        return res;
      } else if (id === "18") {
        const res = USER_AVERAGE_SESSIONS[1];
        return res;
      }
    });
};

export const getUserPerformance = async (id) => {
  return await fetch(baseURL + id + "/performance")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((info) => {
      return info.data;
    })
    .catch((error) => {
      if (id === "12") {
        const res = USER_PERFORMANCE[0];
        return res;
      } else if (id === "18") {
        const res = USER_PERFORMANCE[1];
        return res;
      }
    });
};