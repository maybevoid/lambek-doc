(function() {var implementors = {};
implementors["lambek"] = [{"text":"impl&lt;'a, F, X&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/type_app/struct.App.html\" title=\"struct lambek::type_app::App\">App</a>&lt;'a, F, X&gt;","synthetic":true,"types":["lambek::type_app::App"]},{"text":"impl&lt;F:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, G:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/type_app/struct.Compose.html\" title=\"struct lambek::type_app::Compose\">Compose</a>&lt;F, G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::type_app::Compose"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/type_app/enum.Identity.html\" title=\"enum lambek::type_app::Identity\">Identity</a>","synthetic":true,"types":["lambek::type_app::Identity"]},{"text":"impl&lt;A:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/type_app/struct.Const.html\" title=\"struct lambek::type_app::Const\">Const</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::type_app::Const"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/type_app/enum.VecF.html\" title=\"enum lambek::type_app::VecF\">VecF</a>","synthetic":true,"types":["lambek::type_app::VecF"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/type_app/enum.OptionF.html\" title=\"enum lambek::type_app::OptionF\">OptionF</a>","synthetic":true,"types":["lambek::type_app::OptionF"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/type_app/struct.ResultF.html\" title=\"struct lambek::type_app::ResultF\">ResultF</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::type_app::ResultF"]},{"text":"impl&lt;F:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/bi_type_app/struct.Partial.html\" title=\"struct lambek::bi_type_app::Partial\">Partial</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::bi_type_app::Partial"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/bi_type_app/struct.Curry.html\" title=\"struct lambek::bi_type_app::Curry\">Curry</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::bi_type_app::Curry"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/bi_type_app/struct.UnCurry.html\" title=\"struct lambek::bi_type_app::UnCurry\">UnCurry</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::bi_type_app::UnCurry"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/sum/enum.Bottom.html\" title=\"enum lambek::sum::Bottom\">Bottom</a>","synthetic":true,"types":["lambek::sum::Bottom"]},{"text":"impl&lt;X, Tail&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/sum/enum.Union.html\" title=\"enum lambek::sum::Union\">Union</a>&lt;X, Tail&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tail: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::sum::Union"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/product/struct.Top.html\" title=\"struct lambek::product::Top\">Top</a>","synthetic":true,"types":["lambek::product::Top"]},{"text":"impl&lt;X, Tail&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/product/struct.Cons.html\" title=\"struct lambek::product::Cons\">Cons</a>&lt;X, Tail&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Tail: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;X: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::product::Cons"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/nat/struct.Z.html\" title=\"struct lambek::nat::Z\">Z</a>","synthetic":true,"types":["lambek::nat::Z"]},{"text":"impl&lt;N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"struct\" href=\"lambek/nat/struct.S.html\" title=\"struct lambek::nat::S\">S</a>&lt;N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a>,&nbsp;</span>","synthetic":true,"types":["lambek::nat::S"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/function/enum.FunctionF.html\" title=\"enum lambek::function::FunctionF\">FunctionF</a>","synthetic":true,"types":["lambek::function::FunctionF"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/function/enum.FunctionMutF.html\" title=\"enum lambek::function::FunctionMutF\">FunctionMutF</a>","synthetic":true,"types":["lambek::function::FunctionMutF"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/function/enum.FunctionOnceF.html\" title=\"enum lambek::function::FunctionOnceF\">FunctionOnceF</a>","synthetic":true,"types":["lambek::function::FunctionOnceF"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/reference/enum.Borrow.html\" title=\"enum lambek::reference::Borrow\">Borrow</a>","synthetic":true,"types":["lambek::reference::Borrow"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/reference/enum.BorrowMut.html\" title=\"enum lambek::reference::BorrowMut\">BorrowMut</a>","synthetic":true,"types":["lambek::reference::BorrowMut"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/reference/enum.BoxF.html\" title=\"enum lambek::reference::BoxF\">BoxF</a>","synthetic":true,"types":["lambek::reference::BoxF"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/panic/trait.RefUnwindSafe.html\" title=\"trait std::panic::RefUnwindSafe\">RefUnwindSafe</a> for <a class=\"enum\" href=\"lambek/reference/enum.Own.html\" title=\"enum lambek::reference::Own\">Own</a>","synthetic":true,"types":["lambek::reference::Own"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()