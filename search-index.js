var searchIndex = JSON.parse('{\
"lambek":{"doc":"Lambek is a library that enables type-level programming …","i":[[0,"type_app","lambek","Traits for the kind of unary type application, …",null,null],[8,"TypeCon","lambek::type_app","A proxy type <code>F: TypeCon</code> to mark itself as having the kind …",null,null],[8,"TypeApp","","A type <code>F: TypeApp<X></code> have the associated type <code>Applied</code> as …",null,null],[16,"Applied","","",0,null],[8,"TypeAppGeneric","","",null,null],[10,"with_type_app","","",1,[[["box",3]]]],[8,"TypeAppGenericUnsized","","",null,null],[10,"with_type_app","","",2,[[["box",3]]]],[8,"TypeAppCont","","",null,null],[10,"on_type_app","","",3,[[["box",3]]]],[8,"HasTypeApp","","Encapsulates an applied type into a trait object to …",null,null],[10,"get_applied_box","","Get an applied type <code>FX</code> out of a …",4,[[["box",3]],["box",3]]],[10,"get_applied_borrow","","Get an reference to the applied type, <code>&FX</code>, out of a …",4,[[]]],[10,"get_applied_borrow_mut","","Get a mutable reference to the applied type, <code>&mut FX</code>, out …",4,[[]]],[10,"with_type_app","","If we have a Rust value of type <code>&dyn HasTypeApp<\'a, F, X></code>,…",4,[[["box",3],["typeappcont",8]]]],[3,"App","","Newtype for a boxed value of [HasTypeApp].",null,null],[12,"0","","",5,null],[8,"CloneApp","","",null,null],[10,"clone_app","","",6,[[["app",3]],["app",3]]],[5,"with_type_app","","",null,[[["app",3]]]],[11,"get_applied","","",5,[[]]],[5,"wrap_app","","Wraps a type <code>FX</code> into [App] in the presence of the [TypeApp…",null,[[],["app",3]]],[3,"Compose","","",null,null],[4,"Identity","","<code>App<Identity, X> ~ X</code>",null,null],[3,"Const","","<code>App<Const<A>, X> ~ A</code>",null,null],[4,"VecF","","<code>App<VecF, X> ~ Vec<X></code>",null,null],[4,"OptionF","","<code>App<OptionF, X> ~ Option<X></code>",null,null],[3,"ResultF","","<code>App<ResultF<E>, X> ~ Result<E, X></code>",null,null],[0,"bi_type_app","lambek","Traits for the kind of binary type application, …",null,null],[8,"BiTypeCon","lambek::bi_type_app","",null,null],[8,"BiTypeApp","","",null,null],[16,"Applied","","",7,null],[8,"BiTypeAppGeneric","","",null,null],[10,"with_type_app","","",8,[[]]],[8,"BiTypeAppGenericCont","","",null,null],[10,"on_type_app","","",9,[[]]],[8,"HasBiTypeApp","","",null,null],[10,"get_applied_box","","",10,[[["box",3]],["box",3]]],[10,"get_applied_borrow","","",10,[[]]],[10,"get_applied_borrow_mut","","",10,[[]]],[6,"BiApp","","",null,null],[8,"ToBiTypeApp","","",null,null],[10,"to_applied","","",11,[[["box",3]],["biapp",6]]],[5,"wrap_bi_app","","",null,[[],["biapp",6]]],[3,"Partial","","Partial application of a binary type constructor …",null,null],[3,"Curry","","",null,null],[3,"UnCurry","","",null,null],[0,"constraint","lambek","Traits for constraint kinds, <code>Type -> Constraint</code>",null,null],[8,"HasConstraint","lambek::constraint","",null,null],[10,"with_constraint","","",12,[[["biapp",6]]]],[0,"functor","lambek","The standard <code>Functor</code>, <code>Applicative</code>, and <code>Monad</code> traits.",null,null],[8,"Functor","lambek::functor","",null,null],[10,"fmap","","<code>fmap :: forall a b . f a -> (a -> b) -> f b</code>",13,[[["biapp",6],["app",3]],["app",3]]],[8,"Applicative","","",null,null],[10,"pure","","",14,[[],["app",3]]],[10,"apply","","",14,[[["app",3],["biapp",6],["app",3]],["app",3]]],[8,"Monad","","",null,null],[10,"bind","","",15,[[["app",3],["biapp",6],["app",3]],["app",3]]],[0,"row","lambek","Traits for implementing extensible products and variants",null,null],[8,"RowCon","lambek::row","",null,null],[8,"RowApp","","",null,null],[16,"Applied","","",16,null],[8,"RowAppGeneric","","",null,null],[10,"with_row_app","","",17,[[]]],[8,"RowAppGenericCont","","",null,null],[10,"on_row_app","","",18,[[]]],[8,"HasRowApp","","",null,null],[10,"get_applied","","",19,[[["box",3]],["box",3]]],[10,"get_applied_borrow","","",19,[[]]],[10,"get_applied_borrow_mut","","",19,[[]]],[6,"AppRow","","",null,null],[5,"wrap_row","","",null,[[],["approw",6]]],[8,"LiftRow","","",null,null],[10,"lift","","",20,[[["approw",6]],["approw",6]]],[0,"sum","lambek","Extensible Variants",null,null],[8,"Sum","lambek::sum","",null,null],[4,"Bottom","","",null,null],[4,"Union","","",null,null],[13,"Inl","","",21,null],[13,"Inr","","",21,null],[0,"product","lambek","Extensible Products",null,null],[8,"Product","lambek::product","",null,null],[3,"Top","","",null,null],[3,"Cons","","",null,null],[0,"nat","lambek","",null,null],[8,"Nat","lambek::nat","",null,null],[18,"Value","","",22,null],[10,"new","","",22,[[]]],[3,"Z","","",null,null],[3,"S","","",null,null],[12,"0","","",23,null],[5,"succ","","",null,[[],["s",3]]],[0,"nat_trans","lambek","Natural Transformation, <code>type f ~> g = forall x. f x -> g x</code>",null,null],[8,"NaturalTransformation","lambek::nat_trans","",null,null],[10,"lift","","",24,[[["app",3]],["app",3]]],[0,"function","lambek","",null,null],[4,"FunctionF","lambek::function","",null,null],[4,"FunctionMutF","","",null,null],[4,"FunctionOnceF","","",null,null],[8,"IsFnOnce","","",null,null],[10,"apply_once","","",25,[[["biapp",6]]]],[8,"IsFnMut","","",null,null],[10,"apply_mut","","",26,[[["biapp",6]]]],[8,"IsFn","","",null,null],[10,"apply","","",27,[[["biapp",6]]]],[5,"wrap_function","","",null,[[],[["functionf",4],["biapp",6]]]],[5,"wrap_function_once","","",null,[[],[["functiononcef",4],["biapp",6]]]],[5,"wrap_function_mut","","",null,[[],[["functionmutf",4],["biapp",6]]]],[0,"reference","lambek","",null,null],[8,"IsRef","lambek::reference","Allows functions to be polymorphic over both mutable and …",null,null],[10,"get_ref","","",28,[[["app",3]]]],[8,"IsMutRef","","",null,null],[10,"get_mut_ref","","",29,[[["app",3]]]],[8,"IsOwn","","",null,null],[10,"get_own","","",30,[[["app",3]]]],[8,"IsBox","","",null,null],[10,"get_box","","",31,[[["app",3],["sized",8]],[["sized",8],["box",3]]]],[4,"Borrow","","<code>App<\'a, Borrow, X> ~ &\'a X</code>",null,null],[4,"BorrowMut","","<code>App<\'a, BorrowMut, X> ~ &\'a mut X</code>",null,null],[4,"BoxF","","<code>App<BoxF, X> ~ Box<X></code>",null,null],[4,"Own","","<code>App<Own, X> ~ X</code>",null,null],[14,"define_type_app","lambek","",null,null],[14,"impl_type_app","","",null,null],[11,"get_applied","lambek::type_app","",5,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",5,[[]]],[11,"get_applied_borrow_mut","","",5,[[]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"get_applied","","",32,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",32,[[]]],[11,"get_applied_borrow_mut","","",32,[[]]],[11,"from","","",32,[[]]],[11,"into","","",32,[[]]],[11,"borrow","","",32,[[]]],[11,"borrow_mut","","",32,[[]]],[11,"try_from","","",32,[[],["result",4]]],[11,"try_into","","",32,[[],["result",4]]],[11,"type_id","","",32,[[],["typeid",3]]],[11,"get_applied","","",33,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",33,[[]]],[11,"get_applied_borrow_mut","","",33,[[]]],[11,"from","","",33,[[]]],[11,"into","","",33,[[]]],[11,"borrow","","",33,[[]]],[11,"borrow_mut","","",33,[[]]],[11,"try_from","","",33,[[],["result",4]]],[11,"try_into","","",33,[[],["result",4]]],[11,"type_id","","",33,[[],["typeid",3]]],[11,"get_applied","","",34,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",34,[[]]],[11,"get_applied_borrow_mut","","",34,[[]]],[11,"from","","",34,[[]]],[11,"into","","",34,[[]]],[11,"borrow","","",34,[[]]],[11,"borrow_mut","","",34,[[]]],[11,"try_from","","",34,[[],["result",4]]],[11,"try_into","","",34,[[],["result",4]]],[11,"type_id","","",34,[[],["typeid",3]]],[11,"get_applied","","",35,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",35,[[]]],[11,"get_applied_borrow_mut","","",35,[[]]],[11,"from","","",35,[[]]],[11,"into","","",35,[[]]],[11,"borrow","","",35,[[]]],[11,"borrow_mut","","",35,[[]]],[11,"try_from","","",35,[[],["result",4]]],[11,"try_into","","",35,[[],["result",4]]],[11,"type_id","","",35,[[],["typeid",3]]],[11,"get_applied","","",36,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",36,[[]]],[11,"get_applied_borrow_mut","","",36,[[]]],[11,"from","","",36,[[]]],[11,"into","","",36,[[]]],[11,"borrow","","",36,[[]]],[11,"borrow_mut","","",36,[[]]],[11,"try_from","","",36,[[],["result",4]]],[11,"try_into","","",36,[[],["result",4]]],[11,"type_id","","",36,[[],["typeid",3]]],[11,"get_applied","","",37,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",37,[[]]],[11,"get_applied_borrow_mut","","",37,[[]]],[11,"from","","",37,[[]]],[11,"into","","",37,[[]]],[11,"borrow","","",37,[[]]],[11,"borrow_mut","","",37,[[]]],[11,"try_from","","",37,[[],["result",4]]],[11,"try_into","","",37,[[],["result",4]]],[11,"type_id","","",37,[[],["typeid",3]]],[11,"get_applied","lambek::bi_type_app","",38,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",38,[[]]],[11,"get_applied_borrow_mut","","",38,[[]]],[11,"from","","",38,[[]]],[11,"into","","",38,[[]]],[11,"borrow","","",38,[[]]],[11,"borrow_mut","","",38,[[]]],[11,"try_from","","",38,[[],["result",4]]],[11,"try_into","","",38,[[],["result",4]]],[11,"type_id","","",38,[[],["typeid",3]]],[11,"get_applied","","",39,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",39,[[]]],[11,"get_applied_borrow_mut","","",39,[[]]],[11,"from","","",39,[[]]],[11,"into","","",39,[[]]],[11,"borrow","","",39,[[]]],[11,"borrow_mut","","",39,[[]]],[11,"try_from","","",39,[[],["result",4]]],[11,"try_into","","",39,[[],["result",4]]],[11,"type_id","","",39,[[],["typeid",3]]],[11,"get_applied","","",40,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",40,[[]]],[11,"get_applied_borrow_mut","","",40,[[]]],[11,"from","","",40,[[]]],[11,"into","","",40,[[]]],[11,"borrow","","",40,[[]]],[11,"borrow_mut","","",40,[[]]],[11,"try_from","","",40,[[],["result",4]]],[11,"try_into","","",40,[[],["result",4]]],[11,"type_id","","",40,[[],["typeid",3]]],[11,"get_applied","lambek::sum","",41,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",41,[[]]],[11,"get_applied_borrow_mut","","",41,[[]]],[11,"from","","",41,[[]]],[11,"into","","",41,[[]]],[11,"borrow","","",41,[[]]],[11,"borrow_mut","","",41,[[]]],[11,"try_from","","",41,[[],["result",4]]],[11,"try_into","","",41,[[],["result",4]]],[11,"type_id","","",41,[[],["typeid",3]]],[11,"get_applied","","",21,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",21,[[]]],[11,"get_applied_borrow_mut","","",21,[[]]],[11,"from","","",21,[[]]],[11,"into","","",21,[[]]],[11,"borrow","","",21,[[]]],[11,"borrow_mut","","",21,[[]]],[11,"try_from","","",21,[[],["result",4]]],[11,"try_into","","",21,[[],["result",4]]],[11,"type_id","","",21,[[],["typeid",3]]],[11,"get_applied","lambek::product","",42,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",42,[[]]],[11,"get_applied_borrow_mut","","",42,[[]]],[11,"from","","",42,[[]]],[11,"into","","",42,[[]]],[11,"borrow","","",42,[[]]],[11,"borrow_mut","","",42,[[]]],[11,"try_from","","",42,[[],["result",4]]],[11,"try_into","","",42,[[],["result",4]]],[11,"type_id","","",42,[[],["typeid",3]]],[11,"get_applied","","",43,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",43,[[]]],[11,"get_applied_borrow_mut","","",43,[[]]],[11,"from","","",43,[[]]],[11,"into","","",43,[[]]],[11,"borrow","","",43,[[]]],[11,"borrow_mut","","",43,[[]]],[11,"try_from","","",43,[[],["result",4]]],[11,"try_into","","",43,[[],["result",4]]],[11,"type_id","","",43,[[],["typeid",3]]],[11,"get_applied","lambek::nat","",44,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",44,[[]]],[11,"get_applied_borrow_mut","","",44,[[]]],[11,"from","","",44,[[]]],[11,"into","","",44,[[]]],[11,"to_owned","","",44,[[]]],[11,"clone_into","","",44,[[]]],[11,"borrow","","",44,[[]]],[11,"borrow_mut","","",44,[[]]],[11,"try_from","","",44,[[],["result",4]]],[11,"try_into","","",44,[[],["result",4]]],[11,"type_id","","",44,[[],["typeid",3]]],[11,"get_applied","","",23,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",23,[[]]],[11,"get_applied_borrow_mut","","",23,[[]]],[11,"from","","",23,[[]]],[11,"into","","",23,[[]]],[11,"to_owned","","",23,[[]]],[11,"clone_into","","",23,[[]]],[11,"borrow","","",23,[[]]],[11,"borrow_mut","","",23,[[]]],[11,"try_from","","",23,[[],["result",4]]],[11,"try_into","","",23,[[],["result",4]]],[11,"type_id","","",23,[[],["typeid",3]]],[11,"get_applied","lambek::function","",45,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",45,[[]]],[11,"get_applied_borrow_mut","","",45,[[]]],[11,"from","","",45,[[]]],[11,"into","","",45,[[]]],[11,"borrow","","",45,[[]]],[11,"borrow_mut","","",45,[[]]],[11,"try_from","","",45,[[],["result",4]]],[11,"try_into","","",45,[[],["result",4]]],[11,"type_id","","",45,[[],["typeid",3]]],[11,"get_applied","","",46,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",46,[[]]],[11,"get_applied_borrow_mut","","",46,[[]]],[11,"from","","",46,[[]]],[11,"into","","",46,[[]]],[11,"borrow","","",46,[[]]],[11,"borrow_mut","","",46,[[]]],[11,"try_from","","",46,[[],["result",4]]],[11,"try_into","","",46,[[],["result",4]]],[11,"type_id","","",46,[[],["typeid",3]]],[11,"get_applied","","",47,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",47,[[]]],[11,"get_applied_borrow_mut","","",47,[[]]],[11,"from","","",47,[[]]],[11,"into","","",47,[[]]],[11,"borrow","","",47,[[]]],[11,"borrow_mut","","",47,[[]]],[11,"try_from","","",47,[[],["result",4]]],[11,"try_into","","",47,[[],["result",4]]],[11,"type_id","","",47,[[],["typeid",3]]],[11,"with_type_app","lambek::reference","",48,[[["box",3],["global",3]]]],[11,"get_applied","","",48,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",48,[[]]],[11,"get_applied_borrow_mut","","",48,[[]]],[11,"from","","",48,[[]]],[11,"into","","",48,[[]]],[11,"borrow","","",48,[[]]],[11,"borrow_mut","","",48,[[]]],[11,"try_from","","",48,[[],["result",4]]],[11,"try_into","","",48,[[],["result",4]]],[11,"type_id","","",48,[[],["typeid",3]]],[11,"with_type_app","","",49,[[["box",3],["global",3]]]],[11,"get_applied","","",49,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",49,[[]]],[11,"get_applied_borrow_mut","","",49,[[]]],[11,"from","","",49,[[]]],[11,"into","","",49,[[]]],[11,"borrow","","",49,[[]]],[11,"borrow_mut","","",49,[[]]],[11,"try_from","","",49,[[],["result",4]]],[11,"try_into","","",49,[[],["result",4]]],[11,"type_id","","",49,[[],["typeid",3]]],[11,"with_type_app","","",50,[[["box",3],["global",3]]]],[11,"get_applied","","",50,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",50,[[]]],[11,"get_applied_borrow_mut","","",50,[[]]],[11,"from","","",50,[[]]],[11,"into","","",50,[[]]],[11,"borrow","","",50,[[]]],[11,"borrow_mut","","",50,[[]]],[11,"try_from","","",50,[[],["result",4]]],[11,"try_into","","",50,[[],["result",4]]],[11,"type_id","","",50,[[],["typeid",3]]],[11,"with_type_app","","",51,[[["box",3],["global",3]]]],[11,"get_applied","","",51,[[["global",3],["box",3]],[["global",3],["box",3]]]],[11,"get_applied_borrow","","",51,[[]]],[11,"get_applied_borrow_mut","","",51,[[]]],[11,"from","","",51,[[]]],[11,"into","","",51,[[]]],[11,"borrow","","",51,[[]]],[11,"borrow_mut","","",51,[[]]],[11,"try_from","","",51,[[],["result",4]]],[11,"try_into","","",51,[[],["result",4]]],[11,"type_id","","",51,[[],["typeid",3]]],[11,"with_type_app","lambek::type_app","",33,[[["box",3]]]],[11,"with_type_app","","",35,[[["box",3]]]],[11,"with_type_app","","",36,[[["box",3]]]],[11,"with_type_app","lambek::reference","",48,[[["box",3]]]],[11,"with_type_app","","",49,[[["box",3]]]],[11,"with_type_app","","",51,[[["box",3]]]],[11,"with_type_app","","",50,[[["box",3]]]],[11,"get_applied_box","lambek::type_app","",5,[[["box",3]],["box",3]]],[11,"get_applied_borrow","","Get an reference to the applied type, <code>&FX</code>, out of a …",5,[[]]],[11,"get_applied_borrow_mut","","",5,[[]]],[11,"with_type_app","","",5,[[["box",3],["typeappcont",8]]]],[11,"clone_app","lambek::reference","",48,[[["app",3]],["app",3]]],[11,"clone_app","","",51,[[["app",3]],["app",3]]],[11,"clone_app","","",50,[[["app",3]],["app",3]]],[11,"fmap","lambek::type_app","",32,[[["app",3],["biapp",6],["functiononcef",4],["compose",3]],[["app",3],["compose",3]]]],[11,"fmap","","",32,[[["app",3],["biapp",6],["compose",3],["functionf",4]],[["app",3],["compose",3]]]],[11,"fmap","","",32,[[["app",3],["biapp",6],["functionmutf",4],["compose",3]],[["app",3],["compose",3]]]],[11,"fmap","","",33,[[["identity",4],["biapp",6],["app",3]],[["identity",4],["app",3]]]],[11,"fmap","","",34,[[["const",3],["app",3],["biapp",6]],[["const",3],["app",3]]]],[11,"fmap","","",36,[[["biapp",6],["app",3]],["app",3]]],[11,"fmap","","",37,[[["biapp",6],["app",3]],["app",3]]],[11,"fmap","","",35,[[["biapp",6],["app",3]],["app",3]]],[11,"with_row_app","lambek::sum","",41,[[]]],[11,"with_row_app","","",21,[[]]],[11,"with_row_app","lambek::product","",42,[[]]],[11,"with_row_app","","",43,[[]]],[11,"lift","lambek::sum","",41,[[["approw",6]],["approw",6]]],[11,"lift","","",21,[[["approw",6]],["approw",6]]],[11,"lift","lambek::product","",42,[[["approw",6]],["approw",6]]],[11,"lift","","",43,[[["approw",6]],["approw",6]]],[11,"new","lambek::nat","",44,[[],["z",3]]],[11,"new","","",23,[[],["s",3]]],[11,"apply_once","lambek::function","",45,[[["biapp",6]]]],[11,"apply_once","","",46,[[["biapp",6]]]],[11,"apply_once","","",47,[[["biapp",6]]]],[11,"apply_mut","","",45,[[["biapp",6]]]],[11,"apply_mut","","",46,[[["biapp",6]]]],[11,"apply","","",45,[[["biapp",6]]]],[11,"get_ref","lambek::reference","",48,[[["app",3]]]],[11,"get_ref","","",49,[[["app",3]]]],[11,"get_ref","","",51,[[["app",3]]]],[11,"get_ref","","",50,[[["app",3]]]],[11,"get_mut_ref","","",49,[[["app",3]]]],[11,"get_mut_ref","","",51,[[["app",3]]]],[11,"get_mut_ref","","",50,[[["app",3]]]],[11,"get_own","","",51,[[["app",3]]]],[11,"get_own","","",50,[[["app",3]]]],[11,"get_box","","",50,[[["app",3],["sized",8]],[["sized",8],["box",3]]]],[11,"clone","lambek::nat","",44,[[],["z",3]]],[11,"clone","","",23,[[],["s",3]]]],"p":[[8,"TypeApp"],[8,"TypeAppGeneric"],[8,"TypeAppGenericUnsized"],[8,"TypeAppCont"],[8,"HasTypeApp"],[3,"App"],[8,"CloneApp"],[8,"BiTypeApp"],[8,"BiTypeAppGeneric"],[8,"BiTypeAppGenericCont"],[8,"HasBiTypeApp"],[8,"ToBiTypeApp"],[8,"HasConstraint"],[8,"Functor"],[8,"Applicative"],[8,"Monad"],[8,"RowApp"],[8,"RowAppGeneric"],[8,"RowAppGenericCont"],[8,"HasRowApp"],[8,"LiftRow"],[4,"Union"],[8,"Nat"],[3,"S"],[8,"NaturalTransformation"],[8,"IsFnOnce"],[8,"IsFnMut"],[8,"IsFn"],[8,"IsRef"],[8,"IsMutRef"],[8,"IsOwn"],[8,"IsBox"],[3,"Compose"],[4,"Identity"],[3,"Const"],[4,"VecF"],[4,"OptionF"],[3,"ResultF"],[3,"Partial"],[3,"Curry"],[3,"UnCurry"],[4,"Bottom"],[3,"Top"],[3,"Cons"],[3,"Z"],[4,"FunctionF"],[4,"FunctionMutF"],[4,"FunctionOnceF"],[4,"Borrow"],[4,"BorrowMut"],[4,"BoxF"],[4,"Own"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);