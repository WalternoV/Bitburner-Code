/** @param {NS} ns */
export async function main(ns) {
  var nodeCos, coreCos, ramCos, lvlCos, curMon, nodeNum
  
  while (true) {
    nodeNum = ns.hacknet.numNodes()
    nodeCos = ns.hacknet.getPurchaseNodeCost()

    for(let n = 0; n < nodeNum; n++) {

      curMon = ns.getServerMoneyAvailable("home")
      coreCos = ns.hacknet.getCoreUpgradeCost(n)
      ramCos = ns.hacknet.getRamUpgradeCost(n)
      lvlCos = ns.hacknet.getLevelUpgradeCost(n)

      if (nodeCos <= curMon) {
      ns.hacknet.purchaseNode()
      ns.print("Purchased Node")
      }

      if (coreCos <= curMon) {
        ns.hacknet.upgradeCore(n)
      } else if (ramCos <= curMon) {
        ns.hacknet.upgradeRam(n)
      } else if (lvlCos <= curMon) {
        ns.hacknet.upgradeLevel(n)
      }
    }
    await ns.asleep(1000)
  }
}
