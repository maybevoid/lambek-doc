initSidebarItems({"enum":[["Borrow","`App<'a, Borrow, X> ~ &'a X`"],["BorrowMut","`App<'a, BorrowMut, X> ~ &'a mut X`"],["BoxF","`App<BoxF, X> ~ Box<X>`"],["Identity","`App<Identity, X> ~ X`"],["OptionF","`App<OptionF, X> ~ Option<X>`"],["VecF","`App<VecF, X> ~ Vec<X>`"]],"fn":[["wrap_app","Wraps a type `FX` into [App] in the presence of the [TypeApp] constraint, allowing subsequent use of [App] to not depend on [TypeApp]."]],"struct":[["Compose",""],["ComposeF",""],["Const","`App<Const<A>, X> ~ A`"],["ResultF","`App<ResultF<E>, X> ~ Result<E, X>`"]],"trait":[["HasTypeApp","Encapsulates an applied type into a trait object to prevent `TypeApp` constraints from propagating to type signatures."],["IsMutRef",""],["IsRef","Allows functions to be polymorphic over both mutable and immutable references."],["TypeApp","A type `F: TypeApp<X>` have the associated type `Applied` as the result of applying a type `F` of kind `Type -> Type` to `X`."],["TypeAppCont",""],["TypeAppGeneric",""],["TypeAppGenericUnsized",""],["TypeCon","A proxy type `F: TypeCon` to mark itself as having the kind `Type -> Type`."]],"type":[["App","Type alias for a boxed value of [HasTypeApp]."]]});