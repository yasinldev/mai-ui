const tabLabels = document.querySelectorAll('.mai-tabs > div');
const tabContents = document.querySelectorAll('.mai-tabs-content');

function activateTab(tabId) {
    tabLabels.forEach((tabLabel) => {
        const isActive = tabLabel.classList.contains('tab-items-active');
        const tabGroupId = tabLabel.getAttribute('data-mai-tabs');
        const tabIdInGroup = tabLabel.getAttribute('data-mai-tabs-id');

        if (tabGroupId === tabId.group && tabIdInGroup === tabId.id) {
            if (!isActive) {
                tabLabel.classList.add('tab-items-active');
                tabLabel.classList.remove('tab-items');
            }
        } else {
            if (isActive) {
                tabLabel.classList.add('tab-items');
                tabLabel.classList.remove('tab-items-active');
            }
        }
    });

    tabContents.forEach((tabContent) => {
        const tabContentGroupId = tabContent.getAttribute('data-mai-tabs');
        const tabContentIdInGroup = tabContent.getAttribute('data-mai-tabs-id');

        if (tabContentGroupId === tabId.group && tabContentIdInGroup === tabId.id) {
            tabContent.style.display = 'block';
        } else {
            tabContent.style.display = 'none';
        }
    });
}

function handleTabClick(e) {
    const target = e.target;
    const isTabLabel = target.classList.contains('tab-items') || target.parentElement.classList.contains('tab-items');

    if (isTabLabel) {
        const tabLabel = target.classList.contains('tab-items') ? target : target.parentElement;
        const tabGroupId = tabLabel.getAttribute('data-mai-tabs');
        const tabIdInGroup = tabLabel.getAttribute('data-mai-tabs-id');
        activateTab({ group: tabGroupId, id: tabIdInGroup });
    }
}

tabLabels.forEach((tabLabel) => {
    const tabDisabled = tabLabel.getAttribute('data-mai-tabs-disabled');
    if(tabDisabled === 'true') return;
    tabLabel.addEventListener('click', handleTabClick);
});

activateTab({ group: '0', id: '0' });
