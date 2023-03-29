import {proxy} from 'valtio'

const state=proxy({
   intro:true,
   color:'#36acc7',
   isLogoTexture:true,
   isFullTexture:false,
   logoDecal:'./tpv.png',
   fullDecal:'./tpv.png'
});

export default state;