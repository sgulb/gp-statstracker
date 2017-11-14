//TODO This is only a boilerplate not being used at the momment copied from books application

import axios from "axios";

export default {

//routes for teams
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
