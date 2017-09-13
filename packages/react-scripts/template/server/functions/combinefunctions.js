class CombineFunctions {
  constructor(...args){
    this.methods = args.filter(functionIn=>{return typeof functionIn === 'function' && functionIn.name});
    this.compile = this.compile.bind(this);
    this.chain = this.chain.bind(this);
    this.run = this.run.bind(this);
  }
  chain(functionIn){
    var output = new (Function.prototype.bind.call(CombineFunctions, this.methods));
    if (typeof functionIn === 'function' && functionIn.name && functionIn.name.toLowerCase() !== 'anonymous') {
      output.methods.push(functionIn);
    }
    return output;
  }
  compile(toFunction){
    var fn = toFunction;
    var meth = this.methods;
    return (...args)=>{
      var out = args.concat(meth);
      return fn.apply(null,out);
    };
  }
  run(...args){
    return (this.compile(args[0])(args.slice(1)));
  }
}
module.exports = CombineFunctions;
