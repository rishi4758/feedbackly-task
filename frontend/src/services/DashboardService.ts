import http from "../http-common";

class TutorialDataService {
  getEmoticonAverage() {
    return http.get("/emoticon-average");
  }
  getNpsGroups() {
    return http.get("/nps-groups");
  }
  getNpsScore() {
    return http.get("/nps-score");
  }
}

export default new TutorialDataService();
