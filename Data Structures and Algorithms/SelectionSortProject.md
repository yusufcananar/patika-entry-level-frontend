# Proje 1

## Questions
[22,27,16,2,18,6] -> Insertion Sort

1. Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

2. Big-O gösterimini yazınız.

3. Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması
Worst case: Aradığımız sayının sonda olması
Best case: Aradığımız sayının dizinin en başında olması.
.



4. [7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız.

## Answers

- ### Q1

[22,27,16,2,18,6] -> n      

***-Step 1-*** -> n-1       
[***2***, 27, 16, ***22***, 18, 6]     

***-Step 2-*** -> n-2      
[2, ***6***, 16, 22, 18, ***27***]       

***-Step 3-*** -> n-3          
[2, 6, ***16***, 22, 18, 27]       

***-Step 4-*** -> n-4       
[2, 6, 16, ***18***, ***22***, 27]          

***-Step 5-*** -> 1       
[2, 6, 16, 18, 22, 27]             


- ### Q2
O(n^2)

- ### Q3      
Averaga Case : 18

- ### Q4      
[7,3,5,8,2,9,4,15,6] -> n      

***-Step 1-*** -> n-1     
[***2***,3,5,8,***7***,9,4,15,6]      

***-Step 2-*** -> n-2     
[2,***3***,5,8,7,9,4,15,6]     

***-Step 3-*** -> n-3     
[2,3,***4***,8,7,9,***5***,15,6]      

***-Step 4-*** -> n-4     
[2,3,4,***5***,7,9,***8***,15,6]      

