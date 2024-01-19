

const requiredFields = [
    'context',
    'containment',
    'sensor',
    ['matSrc', 'material-source'],
    'material',
    'actor',
    ['action', 'experimental-action'],
    'hypothesis'
];

export function Experiment(opts) {
    console.log('creating experiment', opts)
    requiredFields.forEach(field => {
        if (Array.isArray(field)) {
            if (!field.some(f => opts[f] && opts[f] !== 'None')) {
                throw new Error(`Experiment requires one of the following fields: ${field.join(', ')}`);
            }
        } else if (!opts[field] || opts[field] === 'None') {
            throw new Error(`Experiment requires field: ${field}`);
        }
    });
    console.log('experiment validated')
    this.contextId = opts.context;
    this.containmentId = opts.containment;
    this.sensorId = opts.sensor;
    this.matSrcId = opts.matSrc || opts['material-source'];
    this.materialId = opts.material;
    this.actorId = opts.actor;
    this.actionId = opts.action || opts['experimental-action'];
    this.hypothesis = opts.hypothesis;
}