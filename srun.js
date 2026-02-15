/** @param {NS} ns */
export async function main(ns) {

  // const server = "n00dles"
  // const script = "n00dles.js"
  const server = ns.args[0]
  const script = "hacktemp.js"

  const maxRam = ns.getServerMaxRam(server)
  const usedRam = ns.getServerUsedRam(server)
  const freeRam = maxRam - usedRam

  const scriptRam = ns.getScriptRam(script, "home")

  const maxThread = Math.floor(freeRam / scriptRam) 

  ns.exec(script, server, maxThread)

}
