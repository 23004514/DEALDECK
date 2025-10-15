    const virtualRadio = document.getElementById('virtual');
    const inPersonRadio = document.getElementById('in_person');
    const virtualSection = document.getElementById('virtual_section');
    const inPersonSection = document.getElementById('in_person_section');

    const bankTransferRadio = document.getElementById('bank_transfer');
    const cardRadio = document.getElementById('card');
    const cashRadio = document.getElementById('cash');
    const cardSection = document.getElementById('card_section');
    const bankTransferSection = document.getElementById('bank_transfer_section');

    const form = document.getElementById('registrationForm');

    const telInput = document.getElementById('tel');
    const telError = document.getElementById('telError');

    const cvvInput = document.getElementById('cvv');
    const cvvError = document.getElementById('cvvError');

    const modal = document.getElementById('confirmationModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function toggleAttendanceSections() {
      if (virtualRadio.checked) {
        virtualSection.classList.add('active');
        inPersonSection.classList.remove('active');
      } else if (inPersonRadio.checked) {
        virtualSection.classList.remove('active');
        inPersonSection.classList.add('active');
      } else {
        virtualSection.classList.remove('active');
        inPersonSection.classList.remove('active');
      }
    }

    function togglePaymentSections() {
      if (cardRadio.checked) {
        cardSection.classList.add('active');
        bankTransferSection.classList.remove('active');
      } else if (bankTransferRadio.checked) {
        cardSection.classList.remove('active');
        bankTransferSection.classList.add('active');
      } else {
        cardSection.classList.remove('active');
        bankTransferSection.classList.remove('active');
      }
    }

    virtualRadio.addEventListener('change', toggleAttendanceSections);
    inPersonRadio.addEventListener('change', toggleAttendanceSections);

    bankTransferRadio.addEventListener('change', togglePaymentSections);
    cardRadio.addEventListener('change', togglePaymentSections);
    cashRadio.addEventListener('change', togglePaymentSections);

    // Validate phone and CVV before submission
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default submission for demo

      let valid = true;

      const telPattern = /^\+?[0-9]{11,14}$/;
      if (!telPattern.test(telInput.value.trim())) {
        telError.style.display = 'block';
        valid = false;
      } else {
        telError.style.display = 'none';
      }

      if (cardRadio.checked) {
        const cvvPattern = /^[0-9]{3}$/;
        if (!cvvPattern.test(cvvInput.value.trim())) {
          cvvError.style.display = 'block';
          valid = false;
        } else {
          cvvError.style.display = 'none';
        }
      } else {
        cvvError.style.display = 'none';
      }

      if (!valid) {
        return; // stop here if invalid
      }

      // Show confirmation modal on success
      modal.classList.add('active');
      modal.focus();
    });

    closeModalBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      form.reset();
      toggleAttendanceSections();
      togglePaymentSections();
      telError.style.display = 'none';
      cvvError.style.display = 'none';
    });

    // Initialize on page load
    toggleAttendanceSections();
    togglePaymentSections();

  function handleSearch() {
    const input = document.getElementById('searchButton');
    const query = input.value.trim();

    if (query) {
      // Redirect or handle the search
      window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    } else {
      alert("Please enter a search term.");
    }
  }

function displayResults(results) {
  var resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results
  results.forEach(function(result) {
    var resultItem = document.createElement('p');
    resultItem.textContent = result;
    resultsContainer.appendChild(resultItem);
  });
}

function updateNotifications(count) {
  document.getElementById('notificationCount').textContent = count;
}

// Example: Update the count to 10
updateNotifications(10);

// Get the current page (e.g., "dashboard", "index.html", etc.)
const current = window.location.pathname.split("/").pop() || "index.html";

// Select all anchor links within <ul>
const links = document.querySelectorAll("ul a");

// Loop through links and add 'active' class if href matches current page
links.forEach(link => {
  const href = link.getAttribute("href");

  if (href === current || href === window.location.pathname) {
    link.classList.add("active");
  }
});
