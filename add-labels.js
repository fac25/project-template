/*
  * Inspired by @Isaddo original script: https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4
  * Adds descriptions per @NillerMedDild https://gist.github.com/Isaddo/7efebcb673a0957b9c6f07cd14826ea4#gistcomment-2715349
 
  Script created to add custom labels.
  1. Go to your project's labels page: https://github.com/fac25/<your project>/labels
  2. Copy and paste the code below
  3. Done (o゜▽゜)o☆
*/

const labels = [
  {
    "name": "a11y",
    "description": "This needs improved accessibility. https://a11yproject.com/",
    "color": "20e5d8"
  },
  {
    "name": "bug: crash 💥",
    "description": "App crashes and is unusable in a significant way.",
    "color": "fbca04"
  },
  {
    "name": "bug: regression ↩️",
    "description": "A new version of the app broke something.",
    "color": "fbca04"
  },
  {
    "name": "discussion 💬",
    "description": "Discussing usage, best practices, questions, etc.",
    "color": "e99695"
  },
  {
    "name": "security 🔒",
    "description": "Questions, concerns, or suggestions for improving the security of the app.",
    "color": "1d76db"
  },
  {
    "name": "status: in progress ❇️",
    "description": "Currently being developed for a future release.",
    "color": "c2e0c6"
  },
  {
    "name": "status: on hold 💤",
    "description": "Work has stopped. There may be one or more blockers or needs more information.",
    "color": "c2e0c6"
  },
  {
    "name": "status: resolved ✅",
    "description": "This has been addressed in a branch and will be scheduled for release in the assigned milestone.",
    "color": "c2e0c6"
  },
  {
    "name": "E1",
    "description": "Short story, Estimated",
    "color": "7e1c05"
  },
  {
    "name": "E2",
    "description": "Story, Estimated",
    "color": "6550b8"
  },
  {
    "name": "E3",
    "description": "Long Story, Estimated",
    "color": "40f3aa"
  },
  {
    "name": "E5",
    "description": "Extra Long Story, Estimated",
    "color": "ce0db3"
  },
  {
    "name": "A1",
    "description": "Short story, Actual",
    "color": "7e1c05"
  },
  {
    "name": "A2",
    "description": "Story, Actual",
    "color": "6550b8"
  },
  {
    "name": "A3",
    "description": "Long Story, Actual",
    "color": "40f3aa"
  },
  {
    "name": "A5",
    "description": "Extra Long Story, Actual",
    "color": "ce0db3"
  }
]

function createLabel( label ) {
    document.querySelector( '.js-new-label-name-input' ).value = label.name;
    document.querySelector( '.js-new-label-description-input' ).value = label.description;
    document.querySelector( '.js-new-label-color-input' ).value = '#' + label.color;
    document.querySelector( '.js-details-target ~ .btn-primary' ).disabled = false;
    document.querySelector( '.js-details-target ~ .btn-primary' ).click();
}

function updateLabel( label ) {
    let updatedLabel = false;
    [].slice.call( document.querySelectorAll( '.js-labels-list-item' ) ).forEach( element => {
        if ( element.querySelector( '.js-label-link' ).textContent.trim() === label.name ) {
            updatedLabel = true;
            element.querySelector( '.js-edit-label' ).click();
            element.querySelector( '.js-new-label-name-input' ).value = label.name;
            element.querySelector( '.js-new-label-description-input' ).value = label.description;
            element.querySelector( '.js-new-label-color-input' ).value = '#' + label.color;
            element.querySelector( '.js-edit-label-cancel ~ .btn-primary' ).click();
        }
    });
    return updatedLabel;
}

function createOrUpdate( label ) {
    if ( !updateLabel( label ) ) {
        createLabel( label );
    }
}

labels.forEach( label => createOrUpdate( label ) )
