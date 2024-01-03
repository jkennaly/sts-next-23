

export function Experiment(opts) {
    this.contextId = opts.context;
    this.containmentId = opts.containment;
    this.sensorId = opts.sensor;
    this.matSrcId = opts.matSrc;
    this.materialId = opts.material;
    this.actorId = opts.actor;
    this.actionId = opts.action;
    this.hypothesis = opts.hypothesis;
}