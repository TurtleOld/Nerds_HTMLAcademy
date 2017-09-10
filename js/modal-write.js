var link = document.querySelector(".button-write");
			var popup = document.querySelector(".modal-contacts");
			var close = popup.querySelector(".close-cross");
			var form = popup.querySelector("form");


			link.addEventListener("click", function (evt) {
			    evt.preventDefault();
			    popup.classList.add("modal-show");
			});

			close.addEventListener("click", function (evt) {
				    evt.preventDefault();
				    popup.classList.remove("modal-show");
				    popup.classList.remove("modal-error");
			});

			window.addEventListener("keydown", function (evt) {
			    if (evt.keyCode === 27) {
			      if (popup.classList.contains("modal-show")) {
			        popup.classList.remove("modal-show");
			        popup.classList.remove("modal-error");
			      }
			    }
			});