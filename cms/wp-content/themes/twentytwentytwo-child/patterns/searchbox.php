<?php
/**
 * Title: 検索ボックス
 * Slug: searchBox
 */
?>

<!-- wp:search {"label":"検索","buttonText":"検索"} /-->

<?php
echo    '<form role="search" method="get" class="search-form" action="/" autocomplete="off">',
            '<input type="search" class="search-field" value="';
echo    $search_query;      
            
echo    '" name="s" id="s" title="Search">',
            '<button class="btn-search" type="submit">',
                '検索',
            '</button>',
        '</form>';
?>