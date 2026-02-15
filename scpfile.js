/** @param {NS} ns */
export async function main(ns) {

  //ns.scp("n00dles.js","n00dles","home")
  const server = ns.args[0]
  ns.scp("hacktemp.js", server, "home")
  
}
