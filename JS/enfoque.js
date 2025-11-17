const containerTabs = document.querySelectorAll('.tab');
const AllContainerBlogs = document.querySelectorAll('.container-blogs');

containerTabs.forEach(tab => {
    tab.addEventListener('click', () => {

        const tabName = tab.dataset.name;

        // Activar tab seleccionado
        containerTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // Mostrar contenido correspondiente
        AllContainerBlogs.forEach(block => {
            block.classList.toggle('active', block.dataset.name === tabName);
        });

    });
});

