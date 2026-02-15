/** @param {NS} ns */
export async function main(ns) {

  const server = ns.args[0]
  const serScript = server + ".js"

  ns.run("pkil.js", 1, server)
  await ns.asleep(400)
  ns.run("scpfile.js", 1, server)
  await ns.asleep(400)
  ns.run("srun.js", 1, server)
}
