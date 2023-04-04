import {proxy} from 'valtio'

const state=proxy({
   intro:true,
   color:'#a448ef',
   isLogoTexture:true,
   isFullTexture:false,
   logoDecal:'./tpv.png',
   fullDecal:'./tpv.png'
});

export default state;