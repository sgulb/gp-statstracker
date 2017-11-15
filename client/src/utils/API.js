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
    return axios.get("/api/team/" + id)
  },
  deleteTeam: function(){
    return axios.delete("/api/team/" + id);
  },

//routes for players
  addPlayer: function(playerData){
    return axios.post("/api/player/", playerData)
  },

  getPlayers: function(){
    return axios.get("/api/player/")
  },

  getOnePlayer: function(){
    return axios.get("/api/player/" + id)
  },

  deletePlayer: function(){
    return axios.delete("/api/player/" + id)
  },

  editPlayer: function(playerData){
    return axios.put("/api/player/" + id, playerData)
  },

//routes for games
  
  deletePlayerGame: function(){
    return axios.delete("/api/playerGames/" + id)
  },

  editPlayerGame: function(playerGameData){
    return axios.put("/api/playerGames/" + id, playerGameData)
  },

  getPlayerGames: function(){
    return axios.get("/api/playerGames/")
  },

  getOnePlayerGame: function(){
    return axios.get("/api/playerGames/" + id)
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
