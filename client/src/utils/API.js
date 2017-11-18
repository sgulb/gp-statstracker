//TODO This is only a boilerplate not being used at the momment copied from books application

import axios from "axios";

export default {

//routes for teams
  
  addTeam: function(teamData){
    return axios.post("/api/team/", teamData)
  },

  getTeams: function(){
    return axios.get("/api/team/")
  },

  getOneTeam: function(){
      // + id
    return axios.get("/api/team/")
  },
  deleteTeam: function(){
      // + id
    return axios.delete("/api/team/");
  },

//routes for players
  addPlayer: function(playerData){
    return axios.post("/api/player/", playerData)
  },

  getPlayers: function(){
    return axios.get("/api/player/")
  },

  getOnePlayer: function(){
      // + id
    return axios.get("/api/player/")
  },

  deletePlayer: function(){
      // + id
    return axios.delete("/api/player/")
  },

  editPlayer: function(playerData){
      // + id ,
    return axios.put("/api/player/", playerData)
  },

//routes for games
  
  deletePlayerGame: function(){
      // + id
    return axios.delete("/api/playerGames/")
  },

  editPlayerGame: function(playerGameData){
      // + ,id
    return axios.put("/api/playerGames/" , playerGameData)
  },

  getPlayerGames: function(){
    return axios.get("/api/playerGames/")
  },

  getOnePlayerGame: function(){
      // + id
    return axios.get("/api/playerGames/")
  },

  addPlayerGame: function(playerGameData){
    return axios.post("/api/playerGames/", playerGameData)
  },

  addTeamGame: function(teamGameData){
    return axios.post("/api/teamGames/", teamGameData)
  }


};



//routes I'll need
/*
-get teams
-delete team
-get one team

-get one player
-get all players
-delete player
-edit player

-delete game(delete)
-edit game (put)
*/