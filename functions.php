<?php 

// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );


// Déclarer les scripts et styles
function fratrie_register_assets() {

    // Déclarer les fonts Google
    wp_enqueue_style( 
        'kurale-font', 
        'https://fonts.googleapis.com/css2?family=Kurale&display=swap'
    );
    wp_enqueue_style( 
        'josefin-font', 
        'https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap'
    );
    
    // Déclarer le JS
	
    
    // Déclarer style.css à la racine du thème
    wp_enqueue_style( 
        'fratrie',
        get_stylesheet_uri(), 
        array(), 
        '1.0'
    );
  	
    // Déclarer le fichier main du dossier css
    wp_enqueue_style( 
        'main', 
        get_template_directory_uri() . '/css/main.css',
        array('base'), 
        '1.0'
    );

    //Déclarer le fichier base
    wp_enqueue_style( 
        'base', 
        get_template_directory_uri() . '/css/base.css',
        array(), 
        '1.0'
    );
}
add_action( 'wp_enqueue_scripts', 'fratrie_register_assets' );